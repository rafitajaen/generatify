import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-larry-strong',
  templateUrl: './larry-strong.component.html',
  styleUrls: ['./larry-strong.component.scss']
})
export class LarryStrongComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
