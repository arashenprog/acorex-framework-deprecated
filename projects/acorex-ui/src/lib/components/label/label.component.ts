import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AXBaseSizableComponent } from '../../core';

@Component({
    selector: 'ax-label',
    templateUrl: './label.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AXLabelComponent extends AXBaseSizableComponent {
    constructor() {
        super();
    }

    ngOnInit(): void { }
}
