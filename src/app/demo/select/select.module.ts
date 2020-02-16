import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPage } from './select.page';
import { AXDataSourceModule, AXSelectBoxModule } from 'acorex-ui';

@NgModule({
  imports: [
    CommonModule,
    AXDataSourceModule,
    AXSelectBoxModule
  ],
  declarations: [SelectPage],
  exports: [SelectPage]
})
export class SelectPageModule { }
