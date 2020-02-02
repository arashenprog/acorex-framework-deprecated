import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AXTextBoxModule,
  AXButtonModule,
  AXFormGroupModule,
  AXLabelModule,
  AXDropdownModule,
  AXSelectBoxModule,
  AXDataSourceModule
}
  from 'acorex-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AXTextBoxModule,
    AXButtonModule,
    AXFormGroupModule,
    AXLabelModule,
    AXDropdownModule,
    AXSelectBoxModule,
    AXDataSourceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
