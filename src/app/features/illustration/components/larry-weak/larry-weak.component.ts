import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-larry-weak',
  templateUrl: './larry-weak.component.html',
  styleUrls: ['./larry-weak.component.scss']
})
export class LarryWeakComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
