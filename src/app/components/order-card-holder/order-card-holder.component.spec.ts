import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardHolderComponent } from './order-card-holder.component';

describe('OrderCardHolderComponent', () => {
  let component: OrderCardHolderComponent;
  let fixture: ComponentFixture<OrderCardHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
