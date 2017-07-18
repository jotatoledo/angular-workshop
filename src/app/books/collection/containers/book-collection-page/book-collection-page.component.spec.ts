import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollectionPageComponent } from './book-collection-page.component';

describe('BookCollectionPageComponent', () => {
  let component: BookCollectionPageComponent;
  let fixture: ComponentFixture<BookCollectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCollectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
