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
  selector: 'test1',
  templateUrl: './test1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test1Component {
  
}