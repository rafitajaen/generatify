import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-larry-secure',
  templateUrl: './larry-secure.component.html',
  styleUrls: ['./larry-secure.component.scss']
})
export class LarrySecureComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
