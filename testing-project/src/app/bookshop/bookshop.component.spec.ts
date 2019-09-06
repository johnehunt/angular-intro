import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshopComponent } from './bookshop.component';
import { Book } from './book';
import {BookService} from './book.service';

class MockBookService {

  constructor() { }

  getBooks(): Book[] {
    const books: Book[] = [
      { isbn: '123', author: 'Adam', title: 'Python' },
      { isbn: '234', author: 'Jasmine', title: 'Salsa' }];
    return books;
  }
}

describe('BookshopComponent', () => {
  let component: BookshopComponent;
  let fixture: ComponentFixture<BookshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshopComponent ],
      providers: [ { provide: BookService, useClass: MockBookService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it ('should have two books', () => {
    expect(component.getBooks().length).toBe(2);
  })
});
