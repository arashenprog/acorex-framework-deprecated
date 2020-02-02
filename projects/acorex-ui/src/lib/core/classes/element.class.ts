import { AXHtmlUtil } from '../utils/utils.api';
import { Input, Output, EventEmitter } from '@angular/core';

export abstract class AXBaseComponent {
    uid: string = AXHtmlUtil.getUID();
    constructor() {
    }
}

export abstract class AXBaseSizableComponent extends AXBaseComponent {
    @Input()
    size: "xs" | "sm" | "md" | "lg" | "xl";
}

export abstract class AXBaseClickableComponent extends AXBaseSizableComponent {
    @Output()
    click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}

export abstract class AXBaseButtonComponent extends AXBaseClickableComponent {

}
