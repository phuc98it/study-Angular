import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HelloComponent } from './hello/hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TabCommonComponent } from './tab-common/tab-common.component';
import { CounterComponent } from './counter/counter.component';
import { TabPanelContentDirective } from './tab-panel/tab-panel.directive';
import { AppRoutingModule } from './app.routes';
import { ArticleModule } from './article/article.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ArticleModule
  ],
  declarations: [
    AppComponent, 
    TopBarComponent, 
    ProductListComponent, 
    ProductAlertsComponent, 
    ProductDetailsComponent, 
    CartComponent, 
    ShippingComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabCommonComponent,
    TemplateOutletComponent,
    CounterComponent,
    TabPanelContentDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
