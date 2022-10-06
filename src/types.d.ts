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
}
