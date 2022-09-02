import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { RoughNotationModule } from 'ngx-rough-notation';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { NgIconsModule } from '@ng-icons/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './sections/hero/hero.component';
import { LogoComponent } from './sections/hero/components/logo/logo.component';
import { HeaderComponent } from './sections/hero/components/header/header.component';
import { GeneratorComponent } from './sections/hero/components/generator/generator.component';
import { PasswordImageComponent } from './sections/hero/components/generator/password-image/password-image.component';
import { PasswordFormComponent } from './sections/hero/components/generator/password-form/password-form.component';
import { DogIllustrationComponent } from './illustrations/dog-illustration/dog-illustration.component';
import { PasswordInputComponent } from './sections/hero/components/generator/password-input/password-input.component';
import { PasswordStrengthComponent } from './sections/hero/components/generator/password-strength/password-strength.component';

import { heroInformationCircle, heroDocumentDuplicate, heroArrowPathRoundedSquare } from '@ng-icons/heroicons/outline';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LogoComponent,
    HeaderComponent,
    GeneratorComponent,
    PasswordImageComponent,
    PasswordFormComponent,
    DogIllustrationComponent,
    PasswordInputComponent,
    PasswordStrengthComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ClipboardModule,
    RoughNotationModule,
    NgxPopperjsModule,
    NgIconsModule.withIcons({ heroInformationCircle, heroDocumentDuplicate, heroArrowPathRoundedSquare }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
