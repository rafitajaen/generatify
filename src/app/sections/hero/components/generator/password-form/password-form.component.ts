import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  passwordForm = this.fb.group({
    length: [10, [Validators.required, Validators.min(1), Validators.max(100)]],
    numbers: [false],
    symbols: [false],
    lowercase: [true],
    uppercase: [true],
    excludeSimilarCharacters: [false],
    exclude: [''],
    strict: [false],
  });

  constructor(private fb: FormBuilder, private generator: PasswordGeneratorService) {
    this.password = '';
    this.advanced = false;
    this.last = false;
  }

  ngOnInit(): void {
    // https://www.tektutorialshub.com/angular/valuechanges-in-angular-forms/

    this.password = this.generator.getPassword(this.passwordForm.value);
    this.last = this.lastCheckboxActive();

    this.passwordForm.valueChanges.subscribe(selectedValue => {
      this.password = this.generator.getPassword(this.passwordForm.value);
      this.last = this.lastCheckboxActive();
      console.log(this.last)
      console.log('form value changed')
      console.log(selectedValue)
      console.log(this.password)
    })
  }

  regenerateEventHandler($event: any) {
    this.password = this.generator.getPassword(this.passwordForm.value);
  }

  /**
   * lastCheckboxActive
   *
   * @returns true if is the last checkbox active
   *
   * ? Source: https://stackoverflow.com/questions/42317140/count-the-number-of-true-members-in-an-array-of-boolean-values
   */

  lastCheckboxActive(): boolean {
    const temp = new Array();

    temp.push(this.passwordForm.value.numbers);
    temp.push(this.passwordForm.value.symbols);
    temp.push(this.passwordForm.value.lowercase);
    temp.push(this.passwordForm.value.uppercase);

    return temp.filter(Boolean).length === 1;
  }

}
