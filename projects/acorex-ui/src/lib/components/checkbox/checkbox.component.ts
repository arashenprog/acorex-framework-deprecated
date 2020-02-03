import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { AXCheckedBaseComponent } from '../../core';

@Component({
  selector: 'ax-check-box',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXCheckBoxComponent extends AXCheckedBaseComponent {

  constructor(protected cdr: ChangeDetectorRef) {
    super(cdr);
  }

}
