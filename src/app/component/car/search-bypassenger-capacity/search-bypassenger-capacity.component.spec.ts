import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBypassengerCapacityComponent } from './search-bypassenger-capacity.component';

describe('SearchBypassengerCapacityComponent', () => {
  let component: SearchBypassengerCapacityComponent;
  let fixture: ComponentFixture<SearchBypassengerCapacityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBypassengerCapacityComponent]
    });
    fixture = TestBed.createComponent(SearchBypassengerCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
