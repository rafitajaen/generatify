import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoughNotationModule } from 'ngx-rough-notation';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoughNotationModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroModule { }
