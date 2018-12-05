import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onOk(){
    // do nothing 
    //child will do
    console.log('ok from parent');
  }

  onCancel(){
    // do nothing 
    //child will do
    console.log('cancel from parent');

  }
}
