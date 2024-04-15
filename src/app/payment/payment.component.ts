import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaystackOptions } from 'angular4-paystack';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  isSubmitted = false;
  paymentFormGroup: FormGroup;
  title = ''
  options: PaystackOptions = {
    amount: 50000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }
  reference = '';
  constructor(formBuild: FormBuilder, private router: Router) {
    this.paymentFormGroup = formBuild.group({
      Email: ['', Validators.required],
      Amount: ['', Validators.required],
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Username: ['', Validators.required],
    });
  }

  get paymentControl() {
    console.log(this.paymentFormGroup.controls)
    return this.paymentFormGroup.controls;
  }


  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  handelSubmit() {
    console.log("function call")
    this.isSubmitted = true;
    console.log("u",this.isSubmitted)
    console.log((this.paymentFormGroup.valid));

    if (this.paymentFormGroup.valid) {
      console.log(this.paymentFormGroup.value);
    } else {
      console.log('form is not valid');
    }
  }
}
