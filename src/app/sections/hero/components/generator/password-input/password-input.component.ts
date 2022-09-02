import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  copied: boolean;

  @Input() password: string;
  @Input() score: number;
  @Output() regenerateEvent = new EventEmitter<string>();

  constructor() {
    this.password = '';
    this.score = 0;
    this.copied = false;
  }

  ngOnInit(): void {

  }

  onCopied() {
    this.copied = true;
    setTimeout(() => this.copied = false, 1500)
  }

  onRegenerate() {
    this.regenerateEvent.emit(this.password);
  }

}
