import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/angular-material/material.module';

import { PaymentPlanComponent } from './payment-plan.component';

describe('PaymentPlanComponent', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentPlanComponent],
      imports:[MaterialModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlanComponent);
    component = fixture.componentInstance;
    component.paymentPlanForm = new FormGroup({
      mortgageAmount: new FormControl(100000,[Validators.required]),
      interestRate: new FormControl(5.0),
      amortizationPeriodData: new FormGroup({
        amortizationPeriodYears: new FormControl('25', [Validators.required]),
        amortizationPeriodMonths: new FormControl('0', [Validators.required]),
      }),
      paymentFrequency: new FormControl('24'),
      term: new FormControl('5', [Validators.required]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial form values for paymentPlanForm group', () => {
    const paymentPlanForm = component.paymentPlanForm;
    const paymentPlanFormValues = {
      mortgageAmount: 100000,
      interestRate: 5.0,
      amortizationPeriodData: {
        amortizationPeriodYears: '25',
        amortizationPeriodMonths: '0',
      },
      paymentFrequency: '24',
      term: '5'
    }
    expect(paymentPlanForm.value).toEqual(paymentPlanFormValues);
  });

  it('paymentFormDataChange output event emitter must emit value on form Change', () => {
    let paymentFormDataChangeSpy = spyOn(component.paymentFormDataChange,'emit');
    component.ngOnInit();
    expect(paymentFormDataChangeSpy).toHaveBeenCalledWith(component.paymentPlanForm.value);
    component.paymentPlanForm.valueChanges.subscribe(result=>{
      expect(paymentFormDataChangeSpy).toHaveBeenCalledWith(result);
    });
  });
});
