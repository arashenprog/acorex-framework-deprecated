import { Component, Input } from '@angular/core';
import { AXBaseSizableComponent, AXBaseInputComponent, AXElementSize } from '../../core';
import { AXPopupService } from '../popup';
@Component({
    selector: 'ax-lov',
    templateUrl: './data-lov.component.html',
    styleUrls: ['./data-lov.component.scss']
})
export class AXLOVComponent implements AXBaseSizableComponent, AXBaseInputComponent {
    constructor(private popup: AXPopupService) {

    }

    @Input()
    readonly: boolean;

    @Input()
    disabled: boolean;

    @Input()
    size: AXElementSize;

    focus(): void {
    }

    handleButtonClick(e){

    }
}
