import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/angular-material/material.module';

import { PrepaymentPlanComponent } from './prepayment-plan.component';

describe('PrepaymentPlanComponent', () => {
  let component: PrepaymentPlanComponent;
  let fixture: ComponentFixture<PrepaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepaymentPlanComponent],
      imports:[FormsModule, ReactiveFormsModule, MaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaymentPlanComponent);
    component = fixture.componentInstance;
    component.prePaymentPlanForm = new FormGroup({
      prePaymentAmount: new FormControl(0.0),
      prePaymentFrequency: new FormControl(1),
      startWithPayment: new FormControl(1),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial form values for paymentPlanForm group', () => {
    const prePaymentPlanForm = component.prePaymentPlanForm;
    const prePaymentPlanFormValues = {
      prePaymentAmount: 0.0,
      prePaymentFrequency: 1,
      startWithPayment: 1,
    }
    expect(prePaymentPlanForm.value).toEqual(prePaymentPlanFormValues);
  });

  it('paymentFormDataChange output event emitter must emit value on form Change', () => {
    let prePaymentFormDataChangeSpy = spyOn(component.prePaymentFormDataChange,'emit');
    component.ngOnInit();
    expect(prePaymentFormDataChangeSpy).toHaveBeenCalledWith(component.prePaymentPlanForm.value);
  });

});
