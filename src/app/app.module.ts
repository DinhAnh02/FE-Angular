import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MidFooterComponent } from './mid-footer/mid-footer.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MidFooterComponent,
    OrderComponent,
    OrderConfirmComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    // HeaderComponent,
    HomeComponent,
    // FooterComponent,
    // MidFooterComponent,
    // OrderComponent,
    // OrderConfirmComponent,
    // LoginComponent,
    // RegisterComponent,
    // DetailProductComponent,
  ]
})
export class AppModule { }
