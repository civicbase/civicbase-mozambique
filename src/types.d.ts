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
    amountPreference?: string
    QVSR?: Quadratic
  }
  step8: {
    revisePrice: string
    willingPay?: number
  }
  step9: {
    showContent: string
    pricePreference?: string
    QVSR?: Quadratic
  }
  step10: {
    revisePrice: string
    willingPay?: number
  }
  step11: {
    showContent: string
    feePreference?: string
    QVSR?: Quadratic
  }
  step12: {
    revisePrice: string
    willingPay?: number
  }
  step13?: {
    emptiedSepticTank: string
    contactedServiceProvider: string
    lastTimeContacted: string
    contactedWho: any
    contactedOther: string
    SASBNotContactedReasons: any
    whatServices: string
    paidService: string
    serviceHowMuch: number
  }
  step14?: {
    fsm: {
      tooExpensive: string
      tooCheap: string
      expensive: string
      greatValue: string
    }
  }
  step15: {
    showContent: 'A' | 'B'
  }
}
