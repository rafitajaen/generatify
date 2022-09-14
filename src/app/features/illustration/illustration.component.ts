import { Component, OnInit } from '@angular/core';
import { Password } from 'src/app/core/models/password';
import { PasswordGeneratorService } from 'src/app/core/services/password-generator.service';

@Component({
  selector: 'illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {

  password: Password;

  constructor(private generator: PasswordGeneratorService) {
    this.password = { value: "", crackTime: "", score: 0 };
  }

  ngOnInit(): void {
    this.generator.onChange.subscribe((p: Password) => this.password = p);
  }

}
