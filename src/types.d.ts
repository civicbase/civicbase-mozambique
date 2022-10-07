type Question = {
  credits: number
  order: number
  statement: string
  vote: number
}
type Quadratic = Question[]

export interface FormValues {
  date: string
  sewerWillingPay: string | number
  step1: {
    uniqueId: string
    language: string
  }
  step2: {
    neighborhood: string
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
    content: 'Treatment' | 'Control'
  }
  step6: {
    relevantInformation: string
    shareInformation: string
  }
  step7: {
    content: 'Treatment - QVSR' | 'Control - Price Slider'
    amountPreference?: string
    QVSR?: Quadratic
  }
  step8: {
    revisePrice: string
    willingPay?: number
  }
  step9: {
    content: 'Treatment - QVSR' | 'Control - Price Slider'
    pricePreference?: string
    QVSR?: Quadratic
  }
  step10: {
    revisePrice: string
    willingPay?: number
  }
  step11: {
    content: 'Treatment - QVSR' | 'Control - Price Slider'
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
    SASBService
    fsm: {
      tooExpensive: string
      tooCheap: string
      expensive: string
      greatValue: string
    }
  }
  step15: {
    content: 'Treatment' | 'Control'
  }
  step16: {
    satisfaction: {
      sewer: string
      sewerlast6Months: string
      qualityDrainage: string
      qualityDrainageLast6Months: string
      SASBFecalSludgeDeslidgingService: string
      qualityFecalSludgeLast6Months: string
      SASBCustomerService: string
      SASBCustomerServiceLast6Months: string
      beiraMunicipality: string
      beiraMunicipalityLast6Months: string
    }
  }
  step17: {
    SASBSatisfaction: string
  }
  step18: {
    shareSASBSatisfaction: string
    knowHowContactSASB: string
  }
}
