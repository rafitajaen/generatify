import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Password } from 'src/app/interfaces/password';
import { PasswordGeneratorService } from 'src/app/services/password-generator.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  copied: boolean;

  private _password: Password;

  public get password(): Password {
    return this._password;
  }

  constructor(private generator: PasswordGeneratorService) {
    this._password = this.generator.password;
    this.copied = false;
  }

  ngOnInit(): void {

    this.generator.onChange.subscribe((p: Password) => this._password = p);
  }

  onCopied() {
    this.copied = true;
    setTimeout(() => this.copied = false, 1500)
  }

  onRegenerate() {
    this.generator.generate();
  }

}
