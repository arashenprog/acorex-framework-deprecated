import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { AXBaseSizableComponent } from '../../core';

@Component({
    selector: 'ax-form-group',
    templateUrl: "./form-group.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXFormGroupComponent extends AXBaseSizableComponent {

    constructor(private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit(): void { }

}
