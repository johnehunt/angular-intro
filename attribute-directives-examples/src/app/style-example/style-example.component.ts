import { Component } from '@angular/core';

@Component( {
    selector: 'app-style-example',
    template: `
    <p [ngStyle]="alertStyles">
        <ng-content></ng-content>
    </p>`
})
export class StyleExampleComponent {
    borderStyle = 'red green blue yellow';

    alertStyles = {
        'color': 'blue',
        'border-style': 'solid',
        'border-color': this.borderStyle
    };
}
