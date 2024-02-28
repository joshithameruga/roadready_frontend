import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBySpecificationComponent } from './search-by-specification.component';

describe('SearchBySpecificationComponent', () => {
  let component: SearchBySpecificationComponent;
  let fixture: ComponentFixture<SearchBySpecificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBySpecificationComponent]
    });
    fixture = TestBed.createComponent(SearchBySpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
