import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPage } from './input.page';
import { AXTextBoxModule, AXFormGroupModule, AXButtonModule, AXSearchBoxModule, AXLabelModule } from 'acorex-ui';

@NgModule({
  imports: [
    CommonModule,
    AXFormGroupModule,
    AXTextBoxModule,
    AXLabelModule,
    AXButtonModule,
    AXSearchBoxModule
  ],
  declarations: [InputPage],
  exports: [InputPage]
})
export class InputPageModule { }
