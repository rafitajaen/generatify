import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Checkbox } from 'src/app/enums/checkbox';
import { PasswordGeneratorService } from 'src/app/services/password-generator.service';


@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  password: string;
  advanced: boolean;
  last: boolean;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private generator: PasswordGeneratorService) {

    this.password = '';
    this.advanced = false;
    this.last = false;

    this.form = formBuilder.group({
      length: [10, [Validators.required, Validators.min(1), Validators.max(100)]],
      numbers: [false],
      symbols: [false],
      lowercase: [true],
      uppercase: [true],
      excludeSimilarCharacters: [false],
      exclude: [''],
      strict: [false],
    });
  }

  ngOnInit(): void {
    // https://www.tektutorialshub.com/angular/valuechanges-in-angular-forms/

    this.password = this.generator.getPassword(this.form.value);
    this.last = this.lastCheckboxActive();

    this.form.valueChanges.subscribe(selectedValue => {
      this.password = this.generator.getPassword(this.form.value);
      this.last = this.lastCheckboxActive();
      console.log(this.last)
      console.log('form value changed')
      console.log(selectedValue)
      console.log(this.password)
    })
  }

  regenerateEventHandler($event: any) {
    this.password = this.generator.getPassword(this.form.value);
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

  disableCheckbox(checkbox: Checkbox): string | null {

    switch (checkbox) {
      case Checkbox.numbers:
        return this.last && this.form.value.numbers ? '' : null;
      case Checkbox.symbols:
        return this.last && this.form.value.symbols ? '' : null;
      case Checkbox.lowercase:
        return this.last && this.form.value.lowercase ? '' : null;
      case Checkbox.uppercase:
        return this.last && this.form.value.uppercase ? '' : null;
      default:
        return null;
    }
  }

  public get checkbox(): typeof Checkbox {
    return Checkbox;
  }

}
