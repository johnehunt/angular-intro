import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    searchfor = "books";
    results: any
    private request: Subscription;

    constructor(private searchService: SearchService) { }

    search(form: NgForm) {
        console.log('searchFor:', this.searchfor)
        this.request = this.searchService
            .search(this.searchfor)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.results = data;
                },
                complete: () => {
                    console.log('All data recieved');
                },
                error: (issue) => {
                    console.log('Something went wrong', issue);
                    alert('Problem: ' + issue)
                }
            });
    }

    cancel() {
        if (this.request != null) this.request.unsubscribe();
    }
}
