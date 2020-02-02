import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { AXBaseSizableComponent } from '../../core';

@Component({
    selector: 'ax-text-box',
    templateUrl: './textbox.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { style: "flex:1" }
})
export class AXTextBoxComponent extends AXBaseSizableComponent {
    constructor(private cdr: ChangeDetectorRef) {
        super()
    }

    ngOnInit(): void { }

    @Input()
    placeholder: string;

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    private _value: string;
    @Input()
    public get value(): string {
        return this._value;
    }
    public set value(v: string) {
        if (v != this.value) {
            this._value = v;
            this.cdr.markForCheck();
            this.valueChange.emit(v);
        }
    }
}
