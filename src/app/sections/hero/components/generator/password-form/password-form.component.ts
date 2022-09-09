import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Options } from 'generate-password-ts/dist/Options';
import { Password } from 'src/app/interfaces/password';
import { PasswordGeneratorService } from 'src/app/services/password-generator.service';


@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  password: Password;
  advanced: boolean;
  last: boolean;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private generator: PasswordGeneratorService) {

    this.advanced = false;

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
    // https://www.tektutorialshub.com/angular/valuechanges-in-angular-forms/

    this.form.valueChanges.subscribe(formValues => {

      this.password = this.generator.generate(formValues as Options);
      this.last = this.lastCheckboxActive();

    })
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

}
