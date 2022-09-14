import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationComponent } from './illustration.component';
import { LarryVulnerableComponent } from './components/larry-vulnerable/larry-vulnerable.component';
import { LarryWeakComponent } from './components/larry-weak/larry-weak.component';
import { LarryGoodComponent } from './components/larry-good/larry-good.component';
import { LarryStrongComponent } from './components/larry-strong/larry-strong.component';
import { LarrySecureComponent } from './components/larry-secure/larry-secure.component';



@NgModule({
  declarations: [
    IllustrationComponent,
    LarryVulnerableComponent,
    LarryWeakComponent,
    LarryGoodComponent,
    LarryStrongComponent,
    LarrySecureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IllustrationComponent
  ]
})
export class IllustrationModule { }
