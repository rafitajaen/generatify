import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';



@NgModule({
  declarations: [
    LogoIconComponent,
    LogoTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoIconComponent,
    LogoTextComponent
  ]
})
export class SharedModule { }
