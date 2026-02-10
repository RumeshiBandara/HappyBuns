import { Component } from '@angular/core';
import { OrderCardHolderComponent } from '../order-card-holder/order-card-holder.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SubtotalComponent } from '../subtotal/subtotal.component';
import { TotalComponent } from '../total/total.component';
import { PlaceOrderComponent } from "../place-order/place-order.component";

@Component({
  selector: 'app-side-bar',
  imports: [OrderCardHolderComponent, OrderDetailsComponent, SubtotalComponent, TotalComponent, PlaceOrderComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
