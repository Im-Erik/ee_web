import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpedienteElectronicoComponent } from './dashboard-expediente-electronico.component';

describe('DashboardExpedienteElectronicoComponent', () => {
  let component: DashboardExpedienteElectronicoComponent;
  let fixture: ComponentFixture<DashboardExpedienteElectronicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardExpedienteElectronicoComponent]
    });
    fixture = TestBed.createComponent(DashboardExpedienteElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
