import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MidFooterComponent } from './mid-footer/mid-footer.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MidFooterComponent,
    OrderComponent,
    OrderConfirmComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [

  ]
})
export class AppModule { }
