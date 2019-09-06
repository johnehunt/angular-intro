import { Component, Input } from '@angular/core';

@Component( {
    selector: 'message',
    template: '<p>{{ text }}</p>'
})
export class MessageComponent {
    @Input() text: string = 'Hello';
}
