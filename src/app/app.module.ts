// Basic Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Custom Modules
import { HeroModule } from './features/hero/hero.module';
import { GeneratorModule } from './features/generator/generator.module';
import { IllustrationModule } from './features/illustration/illustration.module';

// Core Components
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeroModule,
    GeneratorModule,
    IllustrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
