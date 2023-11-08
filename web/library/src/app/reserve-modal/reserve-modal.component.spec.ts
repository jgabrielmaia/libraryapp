import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveModalComponent } from './reserve-modal.component';

describe('ReservModalComponent', () => {
  let component: ReserveModalComponent;
  let fixture: ComponentFixture<ReserveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveModalComponent]
    });
    fixture = TestBed.createComponent(ReserveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
