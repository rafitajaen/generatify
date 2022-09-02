import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit {

  @Input() crackTime: string;

  constructor() {
    this.crackTime = "";
  }

  ngOnInit(): void {
  }

}
