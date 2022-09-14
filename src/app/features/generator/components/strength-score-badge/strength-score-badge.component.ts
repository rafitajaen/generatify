import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength-score-badge',
  templateUrl: './strength-score-badge.component.html',
  styleUrls: ['./strength-score-badge.component.scss']
})
export class StrengthScoreBadgeComponent implements OnChanges {

  private _text: string;

  @Input() score: number;

  public get text() {
    return this._text;
  }

  constructor() {
    this.score = 0;
    this._text = "";
  }

  /**
   * ngOnChanges
   *
   * It works fine if you only have a single @Input()
   *
   * For multiple inputs ngOnChanges gets called multiple times.
   * ? More info: https://dev.to/nickraphael/ngonchanges-best-practice-always-use-simplechanges-always-1feg
   */

  ngOnChanges() {
    this.textify();
  }

  textify() {
    switch (this.score) {
      case 1:
        this._text = "WEAK";
        break;
      case 2:
        this._text = "GOOD";
        break;
      case 3:
        this._text = "STRONG";
        break;
      case 4:
        this._text = "SECURE";
        break;
      default:
        this._text = "VULNERABLE";
        break;
    }
  }

}
