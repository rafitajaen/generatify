import { Component, Input, OnInit } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from "ngx-popperjs";

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

  public get placements(): typeof NgxPopperjsPlacements {
    return NgxPopperjsPlacements;
  }
  public get triggers(): typeof NgxPopperjsTriggers {
    return NgxPopperjsTriggers;
  }

}
