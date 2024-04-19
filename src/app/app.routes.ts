import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HelloComponent } from './hello/hello.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { TabCommonComponent } from './tab-common/tab-common.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
// import { ArticleDetailComponent } from './article-detail/article-detail.component';
// import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'author', component: AuthorListComponent },
  { path: 'tab', component: TabCommonComponent },
  { path: 'template-outlet', component: TemplateOutletComponent },
  // { path: 'article-detail/:slug', component: ArticleDetailComponent },
  // { path: 'article-list', component: ArticleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
