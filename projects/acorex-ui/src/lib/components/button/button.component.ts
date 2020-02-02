import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { AXBaseButtonComponent } from '../../core';
import { element } from 'protractor';

@Component({
    selector: 'ax-button',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './button.component.html',
})
export class AXButtonComponent extends AXBaseButtonComponent {

    @ViewChild('span', { static: true }) span: ElementRef<HTMLSpanElement>;

    hasLabel: boolean = false;

    constructor(private el: ElementRef<HTMLSpanElement>) {
        super();
    }

    @Input()
    type: string = "primary";

    @Input()
    icon: string;

    ngAfterContentInit(): void {
        this.hasLabel = this.span.nativeElement.childNodes.length > 0;

    }

    handleClick(e: MouseEvent) {
        e.stopPropagation()
        this.click.emit(e);
    }
}
