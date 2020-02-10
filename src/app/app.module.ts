import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test.component';
import { ButtonsModule } from './demo/button/button.module';
import { I18nModule } from './demo/i18n/i18n.page.module';

const DEMO = [ButtonsModule, I18nModule];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...DEMO
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent]
})
export class AppModule { }
