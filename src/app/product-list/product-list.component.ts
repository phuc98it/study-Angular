import { Component, ViewChild } from '@angular/core';
import { products } from '../data/products';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // constructor (@ViewChild('toggleComp1') public toggleComp: ToggleComponent) {}
  
  // toggleInside() {
  //   this.toggleComp.toggle();
  // }

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
