import { Component, OnInit } from '@angular/core';

import { PaymentPlanEnumeration } from '../shared/enum/payment-plan-enumeration.enum';
import { CalculationSummary } from '../shared/model/mortgage';

const MONTHS_IN_YEAR = 12;

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
})

export class MortgageCalculatorComponent implements OnInit {
  displayedColumns: string[] = ['Category', 'Term', 'Amortization period'];
  mortgageCalculatorExplanation: string =
    PaymentPlanEnumeration.MortgageCalculatorexplanation;
  dataSource: CalculationSummary[];
  paymentDetails: any;
  prePaymentDetails: any;

  constructor() {}

  ngOnInit(): void {}

  onPaymentPlanFormDataChange(event: any) {
    this.paymentDetails = event;
  }

  onPrePaymentPlanFormDataChange(event: any) {
    this.prePaymentDetails = event;
  }

  getNumberOfPayments(years: number) {
    return (
      years * this.paymentDetails['paymentFrequency'] +
      (this.paymentDetails['amortizationPeriodData'][
        'amortizationPeriodMonths'
      ] /
        MONTHS_IN_YEAR) *
        this.paymentDetails['paymentFrequency']
    );
  }

  calculate() {
    let totalPayments =
      this.getNumberOfPayments(
        this.paymentDetails['amortizationPeriodData']['amortizationPeriodYears']
      ) +
      this.getNumberOfPayments(
        this.paymentDetails['amortizationPeriodData'][
          'amortizationPeriodMonths'
        ] / MONTHS_IN_YEAR
      );
    let termPayments = this.getNumberOfPayments(this.paymentDetails['term']);

    let interestPerPayment =
      (this.paymentDetails['interestRate'] /
        this.paymentDetails['paymentFrequency']) *
      0.01;

    let oneTimeMortgageAmount = this.getOneTimeMortgageAmount(
      this.paymentDetails['mortgageAmount'],
      interestPerPayment,
      totalPayments
    );

    let termPrincipalAmount =
      (this.paymentDetails['mortgageAmount'] /
        (this.paymentDetails['amortizationPeriodData'][
          'amortizationPeriodYears'
        ] +
          this.paymentDetails['amortizationPeriodData'][
            'amortizationPeriodMonths'
          ] /
            MONTHS_IN_YEAR)) *
      this.paymentDetails['term'];
    let totalInterest =
      oneTimeMortgageAmount * totalPayments -
      this.paymentDetails['mortgageAmount'];
    let termInterest =
      oneTimeMortgageAmount * termPayments - termPrincipalAmount;

    this.dataSource = [
      {
        category: 'Number of Payments',
        term: termPayments.toString(),
        amortization_period: totalPayments.toString(),
      },
      {
        category: 'Mortgage Payment',
        term: '$' + oneTimeMortgageAmount.toFixed(2),
        amortization_period: '$' + oneTimeMortgageAmount.toFixed(2),
      },
      {
        category: 'PrePayment',
        term: '$' + this.prePaymentDetails['prePaymentAmount'].toFixed(2),
        amortization_period:
          '$' + this.prePaymentDetails['prePaymentAmount'].toFixed(2),
      },
      {
        category: 'Principal Payments',
        term: '$' + termPrincipalAmount.toFixed(2),
        amortization_period:
          '$' + this.paymentDetails['mortgageAmount'].toFixed(2),
      },
      {
        category: 'Interest Payments',
        term: '$' + termInterest.toFixed(2),
        amortization_period: '$' + totalInterest.toFixed(2),
      },
      {
        category: 'Total Cost',
        term: '$' + (termPrincipalAmount + termInterest).toFixed(2),
        amortization_period:
          '$' +
          (this.paymentDetails['mortgageAmount'] + totalInterest).toFixed(2),
      },
    ];
  }

  getOneTimeMortgageAmount(principal, interest, payments) {
    return (
      principal *
      ((interest * Math.pow(1 + interest, payments)) /
        (Math.pow(1 + interest, payments) - 1))
    );
  }
}
