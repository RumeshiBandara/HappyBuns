import { Component } from '@angular/core';
import { OrderCardComponent } from '../order-card/order-card.component';

@Component({
  selector: 'app-order-card-holder',
  imports: [OrderCardComponent],
  templateUrl: './order-card-holder.component.html',
  styleUrl: './order-card-holder.component.css'
})
export class OrderCardHolderComponent {

}
