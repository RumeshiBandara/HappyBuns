import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCardHolderComponent } from '../../components/product-card-holder/product-card-holder.component';
import { CategorySectionComponent } from "../../components/category-section/category-section.component";

@Component({
  selector: 'app-products',
  imports: [SearchBarComponent, ProductCardHolderComponent, CategorySectionComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
