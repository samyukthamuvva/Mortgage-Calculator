import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentPlanEnumeration } from '../../shared/enum/payment-plan-enumeration.enum';
import { MortgageDropDownType } from '../../shared/model/mortgage';

@Component({
  selector: 'app-prepayment-plan',
  templateUrl: './prepayment-plan.component.html',
  styleUrls: ['./prepayment-plan.component.scss'],
})
export class PrepaymentPlanComponent implements OnInit {
  prePaymentPlanForm: FormGroup;
  @Output() prePaymentFormDataChange = new EventEmitter<any>();
  prePaymentFrequency: MortgageDropDownType[] =
    PaymentPlanEnumeration.prePaymentFrequency;

  constructor() {}

  ngOnInit(): void {
    this.prePaymentPlanForm = new FormGroup({
      prePaymentAmount: new FormControl(0.0),
      prePaymentFrequency: new FormControl(1),
      startWithPayment: new FormControl(1),
    });
    this.prePaymentPlanForm.valueChanges.subscribe((result) => {
      if (result) {
        this.prePaymentFormDataChange.emit(result);
      }
    });
  }
}
