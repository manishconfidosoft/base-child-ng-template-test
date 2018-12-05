import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component extends BaseComponent {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

  onOk(){
    console.log('ok from child1');
  }

  onCancel(){
    console.log('cancel from child1');
  }
}
