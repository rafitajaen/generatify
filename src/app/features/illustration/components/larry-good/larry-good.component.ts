import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-larry-good',
  templateUrl: './larry-good.component.html',
  styleUrls: ['./larry-good.component.scss']
})
export class LarryGoodComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
