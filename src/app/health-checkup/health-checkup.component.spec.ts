import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckupComponent } from './health-checkup.component';

describe('HealthCheckupComponent', () => {
  let component: HealthCheckupComponent;
  let fixture: ComponentFixture<HealthCheckupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthCheckupComponent]
    });
    fixture = TestBed.createComponent(HealthCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
