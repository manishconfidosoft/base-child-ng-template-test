import { Component, OnInit, ElementRef } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component extends BaseComponent {
  okCancel: ElementRef;
ctx:any;
  constructor(private _templateService: TemplateService) {
    super();

  }
  ngOnInit() {
    this.okCancel = this._templateService.okCancel;
    this.ctx = {$implicit:'test', onOk:this.onOk};
  }

  onOk() {
    console.log('ok from child2');
  }

  onCancel() {
    console.log('cancel from child2');
  }
}