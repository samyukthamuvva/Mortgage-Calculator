import { Component, OnInit } from '@angular/core';

import { PaymentPlanEnumeration } from '../shared/enum/payment-plan-enumeration.enum';
import { CalculationSummary } from '../shared/model/mortgage';

const CalculationSummaryData: CalculationSummary[] = [
  { category: 'Number of Payments', term: '60', amortization_period: '300' },
  {
    category: 'Mortgage Payment',
    term: '$581.60',
    amortization_period: '$581.60',
  },
  { category: 'PrePayment', term: '$0.00', amortization_period: '$0.00' },
  {
    category: 'Principal Payments',
    term: '$11,492.00',
    amortization_period: '$1,00,000.00',
  },
  {
    category: 'Interest Payments',
    term: '$23,403.80',
    amortization_period: '$74,481.50',
  },
  {
    category: 'Total Cost',
    term: '34,896.30',
    amortization_period: '$1,74,481.50',
  },
];

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
})
export class MortgageCalculatorComponent implements OnInit {
  displayedColumns: string[] = ['Category', 'Term', 'Amortization period'];
  mortgageCalculatorExplanation: string =
    PaymentPlanEnumeration.MortgageCalculatorexplanation;
  dataSource = CalculationSummaryData;
  constructor() {}

  ngOnInit(): void {}

  onPaymentPlanFormDataChange(event: any) {
    console.log('onPaymentPlanFormDataChange' + JSON.stringify(event));
  }

  onPrePaymentPlanFormDataChange(event: any) {
    console.log('onPrePaymentPlanFormDataChange' + JSON.stringify(event));
  }

  calculate() {}
}
