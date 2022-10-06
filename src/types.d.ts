type Question = {
  credits: number
  order: number
  statement: string
  vote: number
}
type Quadratic = Question[]

export interface FormValues {
  step1: {
    uniqueId: string
    language: string
  }
  step2: {
    sanitationType: string
    dwellingType: string
    waterBill: {
      share: string
      shareNumber: number
    }
  }
  step3: {
    compare: string
  }
  step4: Quadratic
  step5: {
    showContent: 'A' | 'B'
  }
  step6: {
    relevantInformation: string
    shareInformation: string
  }
  step7: {
    showContent: 'QVSR' | 'Slider'
    amountPreference?: number
    QVSR?: Quadratic
  }
  step8: {
    revisePrice: string
    willingPay?: number
  }
  step9: {
    showContent: string
    pricePreference?: number
    QVSR?: Quadratic
  }
  step10: {
    revisePrice: string
    willingPay?: number
  }
  step11: {
    showContent: string
    feePreference?: number
    QVSR?: Quadratic
  }
  step12: {
    revisePrice: string
    willingPay?: number
  }
}
