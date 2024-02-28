import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByMakeComponent } from './search-by-make.component';

describe('SearchByMakeComponent', () => {
  let component: SearchByMakeComponent;
  let fixture: ComponentFixture<SearchByMakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByMakeComponent]
    });
    fixture = TestBed.createComponent(SearchByMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
