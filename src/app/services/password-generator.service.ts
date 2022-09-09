import { EventEmitter, Injectable } from '@angular/core';
import generator from 'generate-password-ts';
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import { OptionsType } from '@zxcvbn-ts/core/dist/types';
import { Password } from '../interfaces/password';

/**
 * Password Generator Service
 *    It generate a password and check the password strength by getting a crackTime and a score.
 *
 * ? Sources:
 *    - generate-password-ts: // https://www.npmjs.com/package/generate-password-ts
 *    - zxcvbn-ts (check password strength): https://www.npmjs.com/package/@zxcvbn-ts/core
 */

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {

  private _password: Password;

  private _options: OptionsType;

  onChange = new EventEmitter<Password>();

  // Public Getters
  public get password(): string {
    return this._password.value;
  }
  public get crackTime(): string {
    return this._password.crackTime;
  }
  public get score(): number {
    return this._password.score;
  }




  constructor() {

    // STEP 1: Initialize zxcvbn Options
    this._options = {
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      translations: zxcvbnEnPackage.translations,
    }

    // STEP 2: Set zxcvbn Options
    zxcvbnOptions.setOptions(this._options);

    // STEP 3: Initialize password
    this._password = { value: "", crackTime: "", score: 0 };

  }

  generate(userOptions: any): Password {
    this._password.value = generator.generate(userOptions);

    const result = zxcvbn(this.password);

    this._password.crackTime = result.crackTimesDisplay.onlineNoThrottling10PerSecond;
    this._password.score = result.score.valueOf();

    this.onChange.emit(this._password);

    return this._password;
  }

}
