import { AXHtmlUtil } from '../utils/utils.api';
import { Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

export abstract class AXBaseComponent {
    uid: string = AXHtmlUtil.getUID();
    constructor() {
    }
}

export abstract class AXBaseSizableComponent extends AXBaseComponent {
    @Input()
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export abstract class AXBaseClickableComponent extends AXBaseSizableComponent {
    @Output()
    click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}

export abstract class AXBaseButtonComponent extends AXBaseClickableComponent {

}
export abstract class AXCheckedBaseComponent extends AXBaseComponent {
    @Input() label: string = '';
    constructor(protected cdr: ChangeDetectorRef) {
      super();
    }
    // Value
    @Output()
    valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    //
    protected _value: boolean = false;
    //
    set value(val: boolean) {
      if (this._value !== val) {
        this._value = val;
        this.valueChange.emit(val);
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      }
    }
    //
    @Input()
    get value(): boolean {
      return this._value;
    }
  }
