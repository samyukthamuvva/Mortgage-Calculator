import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MortgageCalculatorRoutingModule } from './mortgage-calculator-routing.module';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { PrepaymentPlanComponent } from './prepayment-plan/prepayment-plan.component';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { MaterialModule } from '../angular-material/material.module';

@NgModule({
  declarations: [
    PaymentPlanComponent,
    PrepaymentPlanComponent,
    MortgageCalculatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MortgageCalculatorRoutingModule,
    MaterialModule,
  ],
})
export class MortgageCalculatorModule {}
