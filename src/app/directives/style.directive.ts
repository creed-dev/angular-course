import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') colorByClick!: string;
  @Input() borderStyle!: string;

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    this.element.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave', ['$event']) onMouseLeaver() {
    this.element.nativeElement.style.color = null;
    this.element.nativeElement.style.border = null;
  }

  @HostListener('click', ['$event']) onClick() {
    this.element.nativeElement.style.color = this.colorByClick;
    this.element.nativeElement.style.border = this.borderStyle;
  }
}
