import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
  AXDataSourceModule,
  AXCheckBoxModule,
  AXSearchBoxModule,
  AXRadioButtonModule,
  AXSelectionListModule
} from 'acorex-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AXTextBoxModule,
    AXButtonModule,
    AXFormGroupModule,
    AXLabelModule,
    AXDropdownModule,
    AXSelectBoxModule,
    AXDataSourceModule,
    AXCheckBoxModule,
    AXSearchBoxModule,
    AXRadioButtonModule,
    AXSelectionListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
