import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-illustration',
  templateUrl: './dog-illustration.component.html',
  styleUrls: ['./dog-illustration.component.scss']
})
export class DogIllustrationComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 200;
  @Input() primaryColor = "#3f3d56";
  @Input() secondaryColor = "#2f2e41";
  @Input() accentColor = "#6c63ff";

  constructor() { }

  ngOnInit(): void {
  }

}
