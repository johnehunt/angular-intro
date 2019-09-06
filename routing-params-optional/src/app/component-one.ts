import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'component-one',
  template: `
    <div>Query param page #: {{page}}</div>
    <div><button (click)="nextPage()">Next Page</button></div>`
})
export class ComponentOne { 
  private sub: any;
  private page:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 1 if no query param provided.
        this.page = +params['page'] || 1;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/component-one'], { queryParams: { page: this.page + 1 } });
  }
}
