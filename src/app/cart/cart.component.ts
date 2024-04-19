import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({   // form : generate from .group(...)
    name: '',
    address: ''
  });

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
