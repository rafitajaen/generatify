import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Options } from 'generate-password-ts/dist/Options';
import { Password } from 'src/app/core/models/password';
import { PasswordGeneratorService } from 'src/app/core/services/password-generator.service';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  password: Password;
  private _advanced: boolean;
  last: boolean;

  form: FormGroup;

  get advanced(): boolean {
    return this._advanced;
  }

  constructor(private formBuilder: FormBuilder, private generator: PasswordGeneratorService) {

    this._advanced = false;

    this.form = formBuilder.group({
      length: [7, [Validators.required, Validators.min(1), Validators.max(100)]],
      numbers: [true],
      symbols: [false],
      lowercase: [true],
      uppercase: [true],
      excludeSimilarCharacters: [true],
      exclude: [''],
      strict: [false],
    });

    this.password = this.generator.generate(this.form.value as Options);
    this.last = this.lastCheckboxActive();
  }

  ngOnInit(): void {

    this.form.valueChanges.subscribe(formValues => {

      this.password = this.generator.generate(formValues as Options);
      this.last = this.lastCheckboxActive();

    });

  }

  /**
   * lastCheckboxActive
   *
   * @returns true if is the last checkbox active
   *
   * ? Source: https://stackoverflow.com/questions/42317140/count-the-number-of-true-members-in-an-array-of-boolean-values
   */

  lastCheckboxActive(): boolean {

    const value = this.form.value;

    return [value.numbers, value.symbols, value.lowercase, value.uppercase].filter(Boolean).length === 1;

  }

  disableCheckbox(checkbox: string): string | null {

    return this.last && this.form.value[checkbox] ? '' : null;
  }

  toggleAdvancedSettings() {
    this._advanced = !this._advanced;
  }

}
