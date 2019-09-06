import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'component-two',
  template: `<div style="text-align:center">
  <p style="background-color:pink;">Component Two param: <b>ID: {{ id }}</b></p>
  </div>`
})
export class ComponentTwo {
    private sub: any;
  private id;

  constructor(private route: ActivatedRoute) { }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
