import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslatePipe,
  EventService,
  AXComponentFactoryService,
  TranslateService,
  AXStorageService
} from './services';
import { AXScrollModule } from './utils';

@NgModule({
  declarations: [TranslatePipe],
  imports: [
    CommonModule,
    AXScrollModule
  ],
  exports: [TranslatePipe, AXScrollModule],
  providers: [
    EventService,
    AXComponentFactoryService,
    TranslateService,
    AXStorageService
  ]
})
export class AXCoreModule { }
