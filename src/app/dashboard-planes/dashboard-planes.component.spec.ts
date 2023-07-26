import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlanesComponent } from './dashboard-planes.component';

describe('DashboardPlanesComponent', () => {
  let component: DashboardPlanesComponent;
  let fixture: ComponentFixture<DashboardPlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPlanesComponent]
    });
    fixture = TestBed.createComponent(DashboardPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
