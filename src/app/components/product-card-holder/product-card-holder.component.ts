import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-holder',
  imports: [ProductCardComponent],
  templateUrl: './product-card-holder.component.html',
  styleUrl: './product-card-holder.component.css'
})
export class ProductCardHolderComponent {

}
