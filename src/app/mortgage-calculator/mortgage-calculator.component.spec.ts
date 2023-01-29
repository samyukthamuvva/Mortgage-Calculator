import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../angular-material/material.module';
import { MortgageCalculatorRoutingModule } from './mortgage-calculator-routing.module';

import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { PrepaymentPlanComponent } from './prepayment-plan/prepayment-plan.component';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaymentPlanComponent,
        PrepaymentPlanComponent,
        MortgageCalculatorComponent,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterialModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger an event on paymentform value changes and assign value to paymentDetails',()=>{
    let eventData = {
      mortgageAmount: 100000,
      interestRate: 5.0,
      amortizationPeriodData: {
        amortizationPeriodYears: '25',
        amortizationPeriodMonths: '0',
      },
      paymentFrequency: '24',
      term: '5'
    }
    component.onPaymentPlanFormDataChange(eventData);
    expect(component.paymentDetails).toEqual(eventData);
  });

  it('should trigger an event on prePaymentform value changes and assign value to prePaymentDetails',()=>{
    let eventData = {
      prePaymentAmount: 0.0,
      prePaymentFrequency: 1,
      startWithPayment: 1,
    }
    component.onPrePaymentPlanFormDataChange(eventData);
    expect(component.prePaymentDetails).toEqual(eventData);
  });

});
