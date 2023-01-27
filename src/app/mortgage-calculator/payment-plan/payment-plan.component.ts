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
  tooltipBottom: string;
  
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
      mortgageAmount: new FormControl(1000000),
      interestRate: new FormControl(5.0),
      amortizationPeriodData: new FormGroup({
        amortizationPeriodYears: new FormControl('25', [Validators.required]),
        amortizationPeriodMonths: new FormControl('', [Validators.required]),
      }),
      paymentFrequency: new FormControl('12'),
      term: new FormControl('5', [Validators.required]),
    });

    this.tooltipBottom =
      PaymentPlanEnumeration.paymentPlanToolTipData.mortgageAmount;
    this.paymentPlanForm.valueChanges.subscribe((result) => {
      if (result) {
        this.paymentFormDataChange.emit(result);
      }
    });
  }
}
