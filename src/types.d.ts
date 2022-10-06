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
    compare: string
    waterBill: {
      share: string
      shareNumber: number
    }
  }
  step3: Quadratic
}
