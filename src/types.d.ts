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
}
