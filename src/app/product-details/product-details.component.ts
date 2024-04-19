import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../data/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, // ActivatedRoute contains information about the route and the route's parameters.
    private cartService: CartService
  ) {}

  product: Product | undefined;

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
