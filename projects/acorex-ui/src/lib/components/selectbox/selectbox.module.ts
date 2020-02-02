import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXSelectBoxComponent } from './selectbox.component';
import { AXDropdownModule } from '../dropdown';
import { AXTextBoxModule } from '../textbox';
import { AXSearchBoxModule } from '../search-box';

const COMPONENT = [AXSelectBoxComponent];
const MODULES = [CommonModule, AXDropdownModule, AXTextBoxModule, AXSearchBoxModule];

@NgModule({
    declarations: [...COMPONENT],
    imports: [...MODULES],
    exports: [...COMPONENT],
    providers: [],
})
export class AXSelectBoxModule { }