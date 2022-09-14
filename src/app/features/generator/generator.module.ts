import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneratorComponent } from './generator.component';

import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { StrengthScoreBadgeComponent } from './components/strength-score-badge/strength-score-badge.component';

import { ClipboardModule } from 'ngx-clipboard';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { NgIconsModule } from '@ng-icons/core';
import { heroInformationCircle, heroDocumentDuplicate, heroArrowPathRoundedSquare } from '@ng-icons/heroicons/outline';



@NgModule({
  declarations: [
    GeneratorComponent,
    PasswordInputComponent,
    PasswordStrengthComponent,
    StrengthScoreBadgeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule,
    NgxPopperjsModule,
    NgIconsModule.withIcons({ heroInformationCircle, heroDocumentDuplicate, heroArrowPathRoundedSquare })
  ],
  exports: [
    GeneratorComponent
  ]
})
export class GeneratorModule { }
