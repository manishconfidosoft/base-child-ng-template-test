import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parent-child';
  @ViewChild('okokCancel') okCancel:ElementRef;
  /**
   *
   */
  constructor(private _templateService:TemplateService) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._templateService.okCancel=this.okCancel;
  }
}
