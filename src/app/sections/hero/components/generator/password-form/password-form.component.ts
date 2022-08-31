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
  }

  ngOnInit(): void {
    // https://www.tektutorialshub.com/angular/valuechanges-in-angular-forms/

    this.password = this.generator.getPassword(this.passwordForm.value);

    this.passwordForm.valueChanges.subscribe(selectedValue => {
      this.password = this.generator.getPassword(this.passwordForm.value);
      console.log('form value changed')
      console.log(selectedValue)
      console.log(this.password)

    })
  }

  regenerateEventHandler($event: any) {
    this.password = this.generator.getPassword(this.passwordForm.value);
  }

}
