import { AXHtmlUtil } from '../utils/utils.api';
import { Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';


export type AXElementSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';



export abstract class AXBaseComponent {
  uid: string = AXHtmlUtil.getUID();
  constructor() {
  }
}


export interface AXBaseSizableComponent {
  size: AXElementSize;
}

export interface AXBaseInteractiveComponent {
  disabled: boolean;
}

export interface AXBaseInputComponent extends AXBaseInteractiveComponent {
  readOnly: boolean;
  focus(): void;
}


export interface AXBaseValueComponent<T> extends AXBaseInputComponent {
  valueChange: EventEmitter<T>;
  value: T;
}

export interface AXBaseClickableComponent extends AXBaseInteractiveComponent {
  click: EventEmitter<MouseEvent>;
}

export abstract class AXBaseTextComponent extends AXBaseComponent implements AXBaseSizableComponent, AXBaseValueComponent<string> {

  ngAfterViewInit() {
    this.input.nativeElement.onkeyup = (e) => {
      this.onkey.emit(e);
    }
  }

  @ViewChild('input', { static: true })
  input: ElementRef<HTMLInputElement>;

  @Input()
  disabled: boolean = false;

  @Input()
  readOnly: boolean = false;

  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @Input()
  placeholder: string;

  constructor(protected cdr: ChangeDetectorRef) {
    super()
  }

  @Output()
  onkey: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _value: string;
  @Input()
  public get value(): string {
    return this._value;
  }
  public set value(v: string) {
    if (v !== this.value) {
      this._value = v;
      this.cdr.markForCheck();
      this.valueChange.emit(v);
    }
  }

  focus() {
    this.input.nativeElement.focus();
  }

}


export abstract class AXBaseButtonComponent extends AXBaseComponent implements AXBaseClickableComponent, AXBaseSizableComponent {

  @Input()
  disabled: boolean;

  @Output()
  click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Input()
  size: AXElementSize;

}

export abstract class AXBaseDropdownComponent extends AXBaseComponent implements AXBaseInteractiveComponent, AXBaseSizableComponent {

  @Input()
  disabled: boolean;

  @Input()
  size: AXElementSize;

  @Input()
  fitParent: boolean = true;

  abstract close();
  abstract open();
}


