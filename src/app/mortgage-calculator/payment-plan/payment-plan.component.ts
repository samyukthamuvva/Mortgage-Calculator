import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MortgageDropDownType } from '../../shared/model/mortgage';
import { PaymentPlanEnumeration } from '../../shared/enum/payment-plan-enumeration.enum';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss'],
})
export class PaymentPlanComponent implements OnInit {
  paymentPlanForm: FormGroup;
  forbiddenNames: any;
  mortgageAmountTooltip: string;
  interestRateTooltip: string;
  amortizationTooltip: string;
  paymentFrequencyTooltip: string;
  termTooltip: string;

  @Output() paymentFormDataChange = new EventEmitter<any>();

  termList: MortgageDropDownType[] = PaymentPlanEnumeration.Term;
  amortizationPeriodYears: MortgageDropDownType[] =
    PaymentPlanEnumeration.AmortizationPeriodYears;
  amortizationPeriodMonths: MortgageDropDownType[] =
    PaymentPlanEnumeration.AmortizationPeriodMonths;
  paymentFrequency: MortgageDropDownType[] =
    PaymentPlanEnumeration.paymentFrequency;

  constructor() {}

  ngOnInit(): void {
    this.paymentPlanForm = new FormGroup({
      mortgageAmount: new FormControl(100000),
      interestRate: new FormControl(5.0),
      amortizationPeriodData: new FormGroup({
        amortizationPeriodYears: new FormControl('25', [Validators.required]),
        amortizationPeriodMonths: new FormControl('0', [Validators.required]),
      }),
      paymentFrequency: new FormControl('24'),
      term: new FormControl('5', [Validators.required]),
    });
    this.paymentFormDataChange.emit(this.paymentPlanForm.value);

    this.mortgageAmountTooltip =
      PaymentPlanEnumeration.paymentPlanToolTipData.mortgageAmount;
    this.interestRateTooltip =
      PaymentPlanEnumeration.paymentPlanToolTipData.interestRate;
    this.amortizationTooltip =
      PaymentPlanEnumeration.paymentPlanToolTipData.amortizationData;
    this.paymentFrequencyTooltip =
      PaymentPlanEnumeration.paymentPlanToolTipData.paymentFrequency;
    this.termTooltip = PaymentPlanEnumeration.paymentPlanToolTipData.term;

    this.paymentPlanForm.valueChanges.subscribe((result) => {
      if (result) {
        this.paymentFormDataChange.emit(result);
      }
    });
  }
}
