import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslatePipe,
  EventService,
  AXComponentFactoryService,
  TranslateService,
  AXStorageService
} from './services/services.api';
import { AXScrollModule } from './utils/utils.api';

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
