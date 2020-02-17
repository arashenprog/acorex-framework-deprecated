import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AXValidationModule } from '../validation/validation.module';
import { AXDatePickerComponent } from './date-picker.component';
import { AXDropdownModule } from '../dropdown';
@NgModule({
  declarations: [AXDatePickerComponent ],
  imports: [CommonModule, FormsModule, AXDropdownModule, AXCalendarBoxModule, AXValidationModule],
  exports: [AXDatePickerComponent],
  providers: []
})
export class AXDatePickerModule { }
