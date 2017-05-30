import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCollectionComponent } from './empty-collection.component';

describe('EmptyCollectionComponent', () => {
  let component: EmptyCollectionComponent;
  let fixture: ComponentFixture<EmptyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
