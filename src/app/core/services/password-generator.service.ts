import { EventEmitter, Injectable } from '@angular/core';

// Generate Password Package
import generator from 'generate-password-ts';
import { Options } from 'generate-password-ts/dist/Options';

// zxcvbn Package
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import { OptionsType } from '@zxcvbn-ts/core/dist/types';

// Custom Model
import { Password } from '../models/password';


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
  private _options: Options;

  onChange = new EventEmitter<Password>();


  // Public Getters
  public get value(): string {
    return this._password.value;
  }
  public get crackTime(): string {
    return this._password.crackTime;
  }
  public get score(): number {
    return this._password.score;
  }
  public get password(): Password {
    return this._password;
  }


  constructor() {

    // STEP 1: Initialize zxcvbn Options
    var strengthOptions: OptionsType = {
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      translations: zxcvbnEnPackage.translations,
    }

    // STEP 2: Set zxcvbn Options
    zxcvbnOptions.setOptions(strengthOptions);

    // STEP 3: Initialize password
    this._password = { value: "", crackTime: "", score: 0 };

    // STEP 4: Initialize options
    this._options = {}
  }

  generate(options?: Options): Password {

    if (options) this._options = options;

    this._password.value = generator.generate(this._options);

    const result = zxcvbn(this._password.value);

    this._password.crackTime = result.crackTimesDisplay.onlineNoThrottling10PerSecond;
    this._password.score = result.score.valueOf();

    this.onChange.emit(this._password);

    return this._password;
  }

}
