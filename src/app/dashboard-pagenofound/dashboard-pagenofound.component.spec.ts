import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPagenofoundComponent } from './dashboard-pagenofound.component';

describe('DashboardPagenofoundComponent', () => {
  let component: DashboardPagenofoundComponent;
  let fixture: ComponentFixture<DashboardPagenofoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPagenofoundComponent]
    });
    fixture = TestBed.createComponent(DashboardPagenofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
