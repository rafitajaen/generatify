import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  @Input() password: string;

  constructor() { this.password = '' }

  ngOnInit(): void {
  }

}
