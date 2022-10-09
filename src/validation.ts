import * as z from 'zod'

const validationSchema = z.object({
  startAt: z.string(),
  finishAt: z.string(),
  step1: z.object({
    uniqueId: z.string(),
    language: z.string(),
  }),
  step2: z
    .object({
      neighborhood: z.string(),
      sanitationType: z.string(),
      dwellingType: z.string(),
      waterBill: z.object({
        share: z.string().optional(),
        shareNumber: z.number().optional(),
      }),
    })
    .refine(
      step => {
        if (step.dwellingType === 'Compound / Collective') {
          return step.waterBill.share
        }
        return true
      },
      {
        message: 'Required',
        path: ['waterBill.share'],
      },
    )
    .refine(
      step => {
        if (step.dwellingType === 'Compound / Collective') {
          if (step.waterBill.share === 'Yes') {
            if (step.waterBill.shareNumber) {
              return (
                step.waterBill.shareNumber >= 0 &&
                step.waterBill.shareNumber <= 20
              )
            }
          }
        }

        return true
      },
      {
        message: 'Number must be greater than 0 and less than 20',
        path: ['waterBill.shareNumber'],
      },
    ),
  step3: z.object({
    compare: z.string(),
  }),
  step4: z.any(),
  step5: z.object({
    content: z.string(),
  }),
  step6: z.object({
    relevantInformation: z.string(),
    shareInformation: z.string(),
  }),
  step7: z.object({
    content: z.string(),
    amountPreference: z.string().optional(),
    QVSR: z.any().optional(),
  }),
  step8: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
  step9: z.object({
    content: z.string(),
    pricePreference: z.string().optional(),
    QVSR: z.any().optional(),
  }),
  step10: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
  step11: z.object({
    content: z.string(),
    feePreference: z.string().optional(),
    QVSR: z.any().optional(),
  }),
  step12: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
  step13: z
    .object({
      emptiedSepticTank: z.string().optional(),
      serviceProvider: z.object({
        contacted: z.string().optional(),
        contactedMonth: z.string().optional(),
        contactedYear: z.string().optional(),
        who: z.any().optional(),
        other: z.string().optional(),
        service: z.string().optional(),
        paid: z.string().optional(),
        howMuch: z.number().optional(),
        unknownHowMuch: z.boolean().optional(),
      }),
      SASBNotContactedReasons: z.any(),
    })
    .optional(),
  step14: z
    .object({
      fsm: z
        .object({
          tooExpensive: z.string().optional(),
          tooCheap: z.string().optional(),
          expensive: z.string().optional(),
          greatValue: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  step15: z.object({
    content: z.string(),
  }),
  step16: z
    .object({
      satisfaction: z
        .object({
          sewer: z.string().optional(),
          sewerlast6Months: z.string().optional(),
          qualityDrainage: z.string().optional(),
          qualityDrainageLast6Months: z.string().optional(),
          SASBFecalSludgeDeslidgingService: z.string().optional(),
          qualityFecalSludgeLast6Months: z.string().optional(),
          SASBCustomerService: z.string().optional(),
          SASBCustomerServiceLast6Months: z.string().optional(),
          beiraMunicipality: z.string().optional(),
          beiraMunicipalityLast6Months: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  step17: z.object({
    SASBSatisfaction: z.string(),
    share: z
      .array(
        z.object({
          name: z.string().min(1),
          relationship: z.string(),
          closeness: z.string(),
        }),
      )
      .min(1)
      .max(5),
  }),
  step18: z.object({
    shareSASBSatisfaction: z.string(),
    knowHowContactSASB: z.string(),
  }),
  step19: z
    .object({
      oftenSewerDwellingCompoundProblem: z.string(),
      sewerDwellingCompoundReductions: z.string(),
      oftenSewerProblem: z.string(),
      sewerReductions: z.string(),
      oftenBadSmellDwellingCompound: z.string(),
      sewerBadSmellDwellingCompoundReductions: z.string(),
    })
    .partial(),
  step20: z
    .object({
      contacted: z.string().optional(),
      contactedMonth: z.string().optional(),
      contactedYear: z.string().optional(),
      problem: z.string().optional(),
      contactedWho: z.any().optional(),
      contactedOther: z.string().optional(),
      whyDidntContacted: z.any().optional(),
      treatFairPolite: z.string().optional(),
      moreThanOneCall: z.string().optional(),
      bribe: z.string().optional(),
      anotherEntity: z.string().optional(),
      problemResolved: z.string().optional(),
      howLong: z.string().optional(),
    })
    .optional(),
  step21: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
  step22: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
  step23: z.object({
    treatFairPolite: z.string(),
    moreThanOneCall: z.string(),
    bribe: z.string(),
    dealthWith: z.string(),
    problemResolved: z.string(),
    howLong: z.string(),
  }),
  step24: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
  step25: z.object({
    drainageBoxBlocked: z.string(),
    drainageBoxBlockReductions: z.string(),
    drainageDitchBlock: z.string(),
    drainageDitchBlockReductions: z.string(),
    walkedWater: z.string(),
    soakedPassingCar: z.string(),
    StagnantWaterDisease: z.string(),
    StagnantWaterReductions: z.string(),
    floodAfterRain: z.string(),
    floodAfterRainReductions: z.string(),
  }),
  step26: z.object({
    contactedDrainageIssue: z.string(),
    contacted: z
      .object({
        month: z.string().optional(),
        year: z.string().optional(),
        problem: z.string().optional(),
        other: z.string().optional(),
        who: z.any().optional(),
      })
      .optional(),
    SASBNotContactedReasons: z.string().optional(),
    treatFairPolite: z.string().optional(),
    moreThanOneCall: z.string().optional(),
    bribe: z.string().optional(),
    anotherEntity: z.string().optional(),
    problemResolved: z.string().optional(),
    howLong: z.string().optional(),
  }),
  step27: z.object({
    revisePrice: z.string(),
    willingPay: z.number().optional(),
  }),
})

export default validationSchema
