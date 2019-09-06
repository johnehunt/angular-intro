import { Component } from '@angular/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    initialNumber: number = 5;
    childValue: string = 'Nothing Received';
    newNumber: number = 0;

    onCountChanged( n: number ) {
        this.childValue = `Value Received From Child ${n}`;
        this.newNumber = n;
    }
}
