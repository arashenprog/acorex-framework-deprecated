import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AXBaseTextComponent } from '../../core';

@Component({
    selector: 'ax-text-box',
    templateUrl: './textbox.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { style: 'flex:1' }
})
export class AXTextBoxComponent extends AXBaseTextComponent {
    constructor(protected cdr: ChangeDetectorRef) {
        super(cdr);
    }
}
