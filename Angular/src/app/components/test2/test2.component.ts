import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'test2',
  templateUrl: './test2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test2Component {
  
}