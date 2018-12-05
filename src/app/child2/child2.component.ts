import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component extends BaseComponent {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

  onOk(){
    console.log('ok from child2');
  }

  onCancel(){
    console.log('cancel from child2');
  }
}