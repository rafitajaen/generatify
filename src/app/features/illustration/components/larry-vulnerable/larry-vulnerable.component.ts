import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-larry-vulnerable',
  templateUrl: './larry-vulnerable.component.html',
  styleUrls: ['./larry-vulnerable.component.scss']
})
export class LarryVulnerableComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
