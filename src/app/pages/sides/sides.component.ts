import { Component } from '@angular/core';
import { CategorySectionComponent } from "../../components/category-section/category-section.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ProductCardHolderComponent } from "../../components/product-card-holder/product-card-holder.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-sides',
  imports: [CategorySectionComponent, SearchBarComponent, ProductCardHolderComponent, SideBarComponent],
  templateUrl: './sides.component.html',
  styleUrl: './sides.component.css'
})
export class SidesComponent {

}
