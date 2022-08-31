import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  @Input() password: string;

  @Output() regenerateEvent = new EventEmitter<string>();

  constructor() { this.password = '' }

  ngOnInit(): void {
  }

  onRegenerate() {
    this.regenerateEvent.emit(this.password);
  }

}
