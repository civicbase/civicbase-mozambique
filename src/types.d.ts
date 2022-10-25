export type Question = {
  credits: number
  order: number
  statement: string
  vote: number
}
export type Quadratic = Question[]

export interface FormValues {
  startAt: string
  finishAt: string | null
  section4: {
    startAt?: string
    finishAt?: string
  }
  section5: {
    startAt?: string
    finishAt?: string
  }
  section6: {
    startAt?: string
    finishAt?: string
  }
  sewerWillingPay: string | number
  step1: {
    uniqueId: string
    language: string
  }
  step2: {
    neighborhood: string
    sanitationType: string
    dwellingType: string
  }
  step3: {
    waterBill: {
      share: string
      shareNumber: number
    }
    compare: string
  }
  step4: Quadratic
  step5: {
    content: 'Treatment' | 'Control'
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
  step13?: {
    emptiedSepticTank: string
    serviceProvider: {
      contacted: string
      contactedMonth: string
      contactedYear: string
      who: any
      other?: string
      service: string
      paid: string
      howMuch?: number
      unknownHowMuch?: boolean
    }
    SASBNotContactedReasons: any
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
    content: 'Treatment' | 'Control'
  }
  step16: {
    satisfaction: {
      sewer: string
      sewerlast6Months: string
      qualityDrainage: string
      qualityDrainageLast6Months: string
      SASBFecalSludgeDeslidgingService: string | null
      qualityFecalSludgeLast6Months: string | null
      SASBCustomerService: string
      SASBCustomerServiceLast6Months: string
      beiraMunicipality: string
      beiraMunicipalityLast6Months: string
    }
  }
  step17: {
    SASBSatisfaction: string
    share?: {
      name: string
      relationship: string | null
      closeness: string | null
    }[]
    notSharing: boolean
  }
  step18: {
    shareSASBSatisfaction: string
    knowHowContactSASB: string
  }
  step19: {
    oftenSewerProblem: string
    sewerReductions: string
    oftenBadSmellDwellingCompound: string
    sewerBadSmellDwellingCompoundReductions: string
  }
  step20?: {
    contacted?: string
    contactedMonth?: string
    contactedYear?: string
    problem?: string
    contactedWho?: any
    contactedOther?: string
    whyDidntContacted?: any
    treatFairPolite?: string
    moreThanOneCall?: string
    bribe?: string
    anotherEntity?: string
    problemResolved?: string
    howLong?: string
  }
  step21: {
    revisePrice: string
    willingPay?: number
  }
  step22: {
    revisePrice: string
    willingPay?: number
  }
  step23?: {
    treatFairPolite: string
    moreThanOneCall: string
    bribe: string
    dealthWith: string
    problemResolved: string
    howLong: string
  }
  step25: {
    drainageBoxBlocked: string
    drainageDitchBlock: string
    walkedWater: string
    StagnantWaterDisease: string
    StagnantWaterReductions: string
  }
  step26: {
    contactedDrainageIssue: string
    contacted?: {
      month?: string
      year?: string
      problem?: string
      other?: string
      who?: any
    }
    SASBNotContactedReasons?: any
    treatFairPolite?: string
    moreThanOneCall?: string
    bribe?: string
    anotherEntity?: string
    problemResolved?: string
    howLong?: string
  }
  step27: {
    revisePrice: string
    willingPay?: number
  }
}
