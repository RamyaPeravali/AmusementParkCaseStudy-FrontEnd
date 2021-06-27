import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitybycustomerComponent } from './activitybycustomer.component';

describe('ActivitybycustomerComponent', () => {
  let component: ActivitybycustomerComponent;
  let fixture: ComponentFixture<ActivitybycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitybycustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitybycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
