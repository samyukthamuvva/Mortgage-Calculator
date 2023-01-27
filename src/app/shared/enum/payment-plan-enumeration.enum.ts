import { MortgageDropDownType } from "../model/mortgage";

export class PaymentPlanEnumeration {

    static readonly paymentPlanToolTipData: any = {
        mortgageAmount: 'hello',
        binding: 'Actions',
        allowSorting: false,
        minWidth: 80,
        width: 80,
        cssClass: 'action-column',
    };

    static readonly MortgageCalculatorexplanation: string = "This calculator determines your mortgage payment and provides you with a mortgage payment schedule. The calculator also shows how much money and how many years you can save by making prepayments."

    static readonly Term: MortgageDropDownType[] = [{name:'1 Year', value : 1},
        {name:'2 Years', value : 2},
        {name:'3 Years', value : 3},
        {name:'4 Years', value : 4},
        {name:'5 Years', value : 5},
        {name:'6 Years', value : 6},
        {name:'7 Years', value : 7},
        {name:'8 Years', value : 8},
        {name:'9 Years', value : 9},
        {name:'10 Years', value : 10}]

    static readonly AmortizationPeriodYears: MortgageDropDownType[] = [{name:'1 Year', value : 1},
        {name:'2 Years', value : 2},
        {name:'3 Years', value : 3},
        {name:'4 Years', value : 4},
        {name:'5 Years', value : 5},
        {name:'6 Years', value : 6},
        {name:'7 Years', value : 7},
        {name:'8 Years', value : 8},
        {name:'9 Years', value : 9},
        {name:'10 Years', value : 10},
        {name:'11 Years', value : 11},
        {name:'12 Years', value : 12},
        {name:'13 Years', value : 13},
        {name:'14 Years', value : 14},
        {name:'15 Years', value : 15},
        {name:'16 Years', value : 16},
        {name:'17 Years', value : 17},
        {name:'18 Years', value : 18},
        {name:'19 Years', value : 19},
        {name:'20 Years', value : 20},
        {name:'21 Years', value : 21},
        {name:'22 Years', value : 22},
        {name:'23 Years', value : 23},
        {name:'24 Years', value : 24},
        {name:'25 Years', value : 25}]

    static readonly AmortizationPeriodMonths: MortgageDropDownType[] = [{name:'1 Month', value : 1},
        {name:'2 Months', value : 2},
        {name:'3 Months', value : 3},
        {name:'4 Months', value : 4},
        {name:'5 Months', value : 5},
        {name:'6 Months', value : 6},
        {name:'7 Months', value : 7},
        {name:'8 Months', value : 8},
        {name:'9 Months', value : 9},
        {name:'10 Months', value : 10},
        {name:'11 Months', value : 11}]

    static readonly paymentFrequency: MortgageDropDownType[] = [{name:'Accelerated Weekly', value : 1},
        {name:'Weekly', value : 2},
        {name:'Accelerated Bi-Weekly', value : 3},
        {name:'Bi-Weekly (every 2 weeks)', value : 2},
        {name:'Semi-monthly (24x per year)', value : 24},
        {name:'Monthly (12x per year)', value : 12}]

    static readonly prePaymentFrequency: MortgageDropDownType[] = [{name:'One Time', value : 1},
        {name:'Each Year', value : 2},
        {name:'Same as regular Payment', value : 3}]

}
