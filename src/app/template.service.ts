import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  okCancel: ElementRef;

  constructor() { }
}
