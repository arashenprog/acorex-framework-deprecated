import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { AXBaseSizableComponent } from '../../core';
import { AXPopoverComponent } from '../popover';

@Component({
    selector: 'ax-drop-down',
    templateUrl: './dropdown.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { style: 'display:flex;align-items:center;flex:1' }
})
export class AXDropdownComponent extends AXBaseSizableComponent {

    @ViewChild(AXPopoverComponent)
    popSelectBox: AXPopoverComponent;

    constructor() {
        super();
    }

    @Input()
    fitParent: boolean = true;

    ngOnInit(): void { }

    handleArrowClick(e: MouseEvent) {
        this.popSelectBox.toggle();
    }
}
