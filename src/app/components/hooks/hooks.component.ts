import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit , OnChanges , OnDestroy , DoCheck{

  show = false ;

  constructor() {
    console.log("consutructor hookkssss")
   }

  ngOnInit(): void {
    console.log("on INIT")
  }

  ngDoCheck(): void {
    console.log("do ccheeek ")

  }

  ngOnDestroy(): void {
    console.log("on destroy")

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes")

  }

  showHook(){
    this.show = !this.show;
  }

}
