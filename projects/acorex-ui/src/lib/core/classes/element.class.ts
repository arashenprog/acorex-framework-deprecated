import { AXHtmlUtil } from '../utils/utils.api';
import { Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';


export type AXElementSize = "xs" | "sm" | "md" | "lg" | "xl";



export abstract class AXBaseComponent {
  uid: string = AXHtmlUtil.getUID();
  constructor() {
  }
}

<<<<<<< HEAD

export interface AXBaseSizableComponent {
  size: AXElementSize;
}

export interface AXBaseInteractiveComponent {
  disabled: boolean
}

export interface AXBaseInputComponent extends AXBaseInteractiveComponent {
  readOnly: Boolean;
  focus(): void
=======
export abstract class AXBaseSizableComponent extends AXBaseComponent {
  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export abstract class AXBaseClickableComponent extends AXBaseSizableComponent {
  @Output()
  click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
>>>>>>> 75a305fdba7903a0651273674a9316fe8edf7a46
}


export interface AXBaseValueComponent<T> extends AXBaseInputComponent {
  valueChange: EventEmitter<T>;
  value: T;
}
<<<<<<< HEAD

export interface AXBaseClickableComponent extends AXBaseInteractiveComponent {
  click: EventEmitter<MouseEvent>;
}

export abstract class AXBaseTextComponent extends AXBaseComponent implements AXBaseSizableComponent, AXBaseValueComponent<string> {

  @ViewChild("input", { static: true })
  input: ElementRef<HTMLInputElement>;

  @Input()
  disabled: boolean = false;

  @Input()
  readOnly: Boolean = false;

  @Input()
  size: "xs" | "sm" | "md" | "lg" | "xl";

  @Input()
  placeholder: string;

  constructor(protected cdr: ChangeDetectorRef) {
    super()
  }

  @Output()
  onkey: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  ngAfterViewInit() {
    this.input.nativeElement.onkeyup = (e) => {
      this.onkey.emit(e);
    }
  }



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


=======
export abstract class AXCheckedBaseComponent extends AXBaseSizableComponent {
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
>>>>>>> 75a305fdba7903a0651273674a9316fe8edf7a46
