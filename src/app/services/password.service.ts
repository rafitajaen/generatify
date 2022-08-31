import { Injectable } from '@angular/core';
import generator from 'generate-password-ts';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  // https://www.npmjs.com/package/generate-password-ts

  getPassword(options: any): string {
    return generator.generate(options);
  }
}
