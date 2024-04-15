import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from "./payment/payment.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular4PaystackModule } from 'angular4-paystack';
@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Angular4PaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
