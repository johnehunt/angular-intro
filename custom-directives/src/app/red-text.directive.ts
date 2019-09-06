import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive( {
    selector: '[red]'
})
export class RedTextDirective {
    constructor( private el: ElementRef, private render: Renderer ) {
        this.render.setElementStyle( this.el.nativeElement, 'color', 'red' );
    }
}
