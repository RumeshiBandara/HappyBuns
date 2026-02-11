import { Component } from '@angular/core';
import { CategorySectionComponent } from "../../components/category-section/category-section.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ProductCardHolderComponent } from "../../components/product-card-holder/product-card-holder.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-desserts',
  imports: [CategorySectionComponent, SearchBarComponent, ProductCardHolderComponent, SideBarComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent {

}
