import { Component, Input } from '@angular/core';

@Component( {
    selector: 'app-for-example',
    template: '<ng-content></ng-content>'
})
export class ForExampleComponent {
    @Input() play: string;
}