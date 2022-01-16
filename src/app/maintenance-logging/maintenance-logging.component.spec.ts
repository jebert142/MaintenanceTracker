import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceLoggingComponent } from './maintenance-logging.component';

describe('MaintenanceLoggingComponent', () => {
  let component: MaintenanceLoggingComponent;
  let fixture: ComponentFixture<MaintenanceLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceLoggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
