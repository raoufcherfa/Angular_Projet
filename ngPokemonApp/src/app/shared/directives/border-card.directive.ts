import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  @Input('appBorderCard') borderColor;
  GREEN_COLOR = '#1fd21f';
  GREY_COLOR = '#807474';
  private element
  constructor(element: ElementRef) {
    this.element=element;
    this.setBorder(this.GREEN_COLOR);
    this.setHeight(180);
  }

  private setBorder(color: string) {
    const border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.element.nativeElement.style.height = height + 'px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.GREEN_COLOR);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.GREY_COLOR);
  }
}
