import { Component, OnInit } from '@angular/core';
import { Password } from 'src/app/interfaces/password';
import { PasswordGeneratorService } from 'src/app/services/password-generator.service';

@Component({
  selector: 'app-password-image',
  templateUrl: './password-image.component.html',
  styleUrls: ['./password-image.component.scss']
})
export class PasswordImageComponent implements OnInit {

  password: Password;

  constructor(private generator: PasswordGeneratorService) {
    this.password = { value: "", crackTime: "", score: 0 };
  }

  ngOnInit(): void {
    this.generator.onChange.subscribe((p: Password) => this.password = p);
  }

}
