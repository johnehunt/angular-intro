import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorchange]'
})
export class ColorChangeDirective {

  @Input() color: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.color) {
      this.setColour(this.color)
    } else {
      this.setColour('red')
    }
  }

  setColour(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'color', color
    )
  }

}
