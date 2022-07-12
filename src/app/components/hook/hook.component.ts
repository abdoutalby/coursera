import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss'],
})
export class HookComponent
  implements
    OnInit,
    OnChanges,
    AfterViewChecked,
    OnDestroy,
    DoCheck,
    AfterViewInit
{
  constructor() {
    console.log('consutructor hook');
  }
  ngAfterViewInit(): void {
    console.log('after view init ');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked ');
  }
  ngOnInit(): void {
    console.log('hook  INIT');
  }
  ngDoCheck(): void {
    console.log('hook  ccheeek ');
  }
  ngOnDestroy(): void {
    console.log('hook  destroy');
  }
  ngOnChanges(): void {
    console.log('hook  changes');
  }
}
