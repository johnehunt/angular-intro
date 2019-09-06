import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive( {
    selector: '[changecolor]'
})
export class ChangeColorDirective {
    constructor( private el: ElementRef, private render: Renderer ) {
        this.render.setElementStyle( this.el.nativeElement, 'color', 'red' );
    }
}
