import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbycustomerComponent } from './ticketbycustomer.component';

describe('TicketbycustomerComponent', () => {
  let component: TicketbycustomerComponent;
  let fixture: ComponentFixture<TicketbycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbycustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketbycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
