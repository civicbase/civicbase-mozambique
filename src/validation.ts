import { TranslationFunctions } from 'i18n/i18n-types'
import * as z from 'zod'

const validationSchema = (LL: TranslationFunctions) => {
  const schema = z.object({
    startAt: z.string(),
    finishAt: z.string(),
    section4: z.object({
      startAt: z.string(),
      finishAt: z.string(),
    }),
    section5: z.object({
      startAt: z.string(),
      finishAt: z.string(),
    }),
    section6: z.object({
      startAt: z.string(),
      finishAt: z.string(),
    }),
    step1: z.object({
      uniqueId: z.string(),
      language: z.string(),
    }),
    step2: z
      .object({
        neighborhood: z.string(),
        sanitationType: z.string(),
        dwellingType: z.string(),
      })
      .optional(),
    step3: z.object({
      compare: z.string(),
      waterBill: z
        .object({
          share: z.string().optional(),
          shareNumber: z.number().nullish(),
        })
        .optional(),
    }),
    step4: z.any(),
    step5: z.object({
      content: z.string(),
      relevantInformation: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      shareInformation: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
    }),
    step6: z.object({
      content: z.string(),
      amountPreference: z.string().optional(),
      QVSR: z.any().optional(),
    }),
    step7: z.object({
      revisePrice: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      willingPay: z.any().optional(),
      y: z.any().optional(),
      x: z.number(),
    }),
    step8: z.object({
      content: z.string(),
      pricePreference: z.string().optional(),
      QVSR: z.any().optional(),
    }),
    step9: z.object({
      revisePrice: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      willingPay: z.any().optional(),
      y: z.any().optional(),
      x: z.number(),
    }),
    step10: z
      .object({
        emptiedSepticTank: z.string().optional(),
        serviceProvider: z
          .object({
            contacted: z.string().optional(),
            contactedMonth: z.string().optional(),
            contactedYear: z.string().optional(),
            who: z.any().optional(),
            other: z.string().optional(),
            service: z.string().optional(),
            paid: z.string().optional(),
            howMuch: z.number({ invalid_type_error: LL.errors.number() }).optional(),
            unknownHowMuch: z.boolean().optional(),
          })
          .optional(),
        SASBNotContactedReasons: z.any().optional(),
      })
      .refine(
        (step) => {
          if (step.emptiedSepticTank === LL.choices.yesNo[0]()) {
            return step.serviceProvider?.contacted
          }
          return true
        },
        {
          message: LL.errors.required(),
          path: ['serviceProvider.contacted'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            return step.serviceProvider.contactedMonth
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['serviceProvider.contactedMonth'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            return step.serviceProvider.contactedYear
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['serviceProvider.contactedYear'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            return (
              step.serviceProvider.who[LL.choices.serviceProvider[0]()] ||
              step.serviceProvider.who[LL.choices.serviceProvider[1]()] ||
              step.serviceProvider.who[LL.choices.serviceProvider[2]()] ||
              step.serviceProvider.who[LL.choices.serviceProvider[3]()] ||
              step.serviceProvider.who[LL.choices.serviceProvider[4]()] ||
              step.serviceProvider.who[LL.choices.serviceProvider[5]()]
            )
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['serviceProvider.who'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            if (step.serviceProvider.who[LL.choices.serviceProvider[5]()]) {
              return step.serviceProvider.other
            }
          }
          return true
        },
        {
          message: LL.errors.string(),
          path: ['serviceProvider.other'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            if (!step.serviceProvider?.who['SASB']) {
              return (
                step.SASBNotContactedReasons[0] ||
                step.SASBNotContactedReasons[1] ||
                step.SASBNotContactedReasons[2] ||
                step.SASBNotContactedReasons[3] ||
                step.SASBNotContactedReasons[4] ||
                step.SASBNotContactedReasons[5] ||
                step.SASBNotContactedReasons[6]
              )
            }
          }
          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['SASBNotContactedReasons'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            return step.serviceProvider.service
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['serviceProvider.service'],
        },
      )
      .refine(
        (step) => {
          if (
            step.emptiedSepticTank === LL.choices.yesNo[0]() &&
            step.serviceProvider?.contacted === LL.choices.yesNo[0]()
          ) {
            return step.serviceProvider.paid
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['serviceProvider.paid'],
        },
      )
      .optional(),
    step11: z
      .object({
        pricePreference: z.string(),
      })
      .optional(),
    step12: z.object({
      content: z.string(),
    }),
    step13: z
      .object({
        satisfaction: z
          .object({
            sewer: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            sewerlast6Months: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            qualityDrainage: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            qualityDrainageLast6Months: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            SASBFecalSludgeDeslidgingService: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            qualityFecalSludgeLast6Months: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            SASBCustomerService: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            SASBCustomerServiceLast6Months: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            beiraMunicipality: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
            beiraMunicipalityLast6Months: z
              .string({
                invalid_type_error: LL.choices.placeholder(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    step14: z
      .object({
        SASBSatisfaction: z.string({
          invalid_type_error: LL.choices.placeholder(),
        }),
        notSharing: z.boolean(),
        share: z
          .array(
            z.object({
              name: z.string().nullable().optional(),
              relationship: z.string().nullable().optional(),
              closeness: z.string().nullable().optional(),
            }),
          )
          .max(3)
          .optional(),
      })
      .optional()
      .refine(
        (step) => {
          if (!step?.notSharing && step?.share) {
            return step?.share?.length > 0
          }

          return true
        },
        { message: 'Please share one contact', path: ['share'] },
      ),
    step15: z.object({
      shareSASBSatisfaction: z.string(),
      knowHowContactSASB: z.string(),
    }),
    step16: z
      .object({
        oftenSewerProblem: z.string({
          invalid_type_error: LL.choices.placeholder(),
        }),
        sewerReductions: z.string({
          invalid_type_error: LL.choices.placeholder(),
        }),
        oftenBadSmellDwellingCompound: z.string({
          invalid_type_error: LL.choices.placeholder(),
        }),
        sewerBadSmellDwellingCompoundReductions: z.string({
          invalid_type_error: LL.choices.placeholder(),
        }),
      })
      .partial(),
    step17: z
      .object({
        contacted: z.string(),
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
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]()) {
            return step.contactedMonth
          }
          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['contactedMonth'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]()) {
            return step.contactedYear
          }
          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['contactedYear'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]()) {
            return step.problem
          }
          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['problem'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]()) {
            return (
              step.contactedWho[LL.choices.serviceProvider[0]()] ||
              step.contactedWho[LL.choices.serviceProvider[1]()] ||
              step.contactedWho[LL.choices.serviceProvider[2]()] ||
              step.contactedWho[LL.choices.serviceProvider[3]()] ||
              step.contactedWho[LL.choices.serviceProvider[4]()] ||
              step.contactedWho[LL.choices.serviceProvider[5]()]
            )
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['contactedWho'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]() && step.contactedWho[LL.choices.serviceProvider[5]()]) {
            return step.contactedOther
          }
          return true
        },
        {
          message: LL.errors.string(),
          path: ['contactedOther'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]()) {
            if (!step.contactedWho['SASB']) {
              return (
                step.whyDidntContacted[0] ||
                step.whyDidntContacted[1] ||
                step.whyDidntContacted[2] ||
                step.whyDidntContacted[3] ||
                step.whyDidntContacted[4] ||
                step.whyDidntContacted[5] ||
                step.whyDidntContacted[6]
              )
            }
          }
          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['whyDidntContacted'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]() && step.contactedWho['SASB']) {
            return step.treatFairPolite
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['treatFairPolite'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]() && step.contactedWho['SASB']) {
            return step.moreThanOneCall
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['moreThanOneCall'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]() && step.contactedWho['SASB']) {
            return step.bribe
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['bribe'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]() && step.contactedWho['SASB']) {
            return step.anotherEntity
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['anotherEntity'],
        },
      )
      .refine(
        (step) => {
          if (step.contacted === LL.choices.yesNo[0]() && step.contactedWho['SASB']) {
            return step.problemResolved
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['problemResolved'],
        },
      )
      .refine(
        (step) => {
          if (
            step.contacted === LL.choices.yesNo[0]() &&
            step.contactedWho['SASB'] &&
            step.problemResolved === LL.choices.yesNo[0]()
          ) {
            return step.howLong
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['howLong'],
        },
      )
      .optional(),
    step18: z.object({
      revisePrice: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      willingPay: z.any().optional(),
      y: z.any().optional(),
    }),
    step19: z
      .object({
        treatFairPolite: z.string(),
        moreThanOneCall: z.string(),
        bribe: z.string(),
        dealthWith: z.string(),
        problemResolved: z.string(),
        howLong: z
          .string({
            invalid_type_error: LL.choices.placeholder(),
          })
          .nullish()
          .optional(),
      })
      .refine(
        (step) => {
          if (step?.problemResolved === LL.choices.yesNo[0]()) {
            return step?.howLong
          }

          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['howLong'],
        },
      )
      .optional(),
    step20: z.object({
      drainageBoxBlocked: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      drainageDitchBlock: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      walkedWater: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      StagnantWaterDisease: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      StagnantWaterReductions: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
    }),
    step21: z
      .object({
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
        SASBNotContactedReasons: z.any().optional(),
        treatFairPolite: z.string().optional(),
        moreThanOneCall: z.string().optional(),
        bribe: z.string().optional(),
        anotherEntity: z.string().optional(),
        problemResolved: z.string().optional(),
        howLong: z.string().optional(),
      })
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]()) {
            return step.contacted?.month
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['contacted.month'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]()) {
            return step.contacted?.year
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['contacted.year'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]()) {
            return step.contacted?.problem
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['contacted.problem'] },
      )
      .refine(
        (step) => {
          if (
            step.contactedDrainageIssue === LL.choices.yesNo[0]() &&
            step.contacted?.problem === LL.choices[614][5]()
          ) {
            return step.contacted?.other
          }
          return true
        },
        { message: LL.errors.string(), path: ['contacted.other'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]()) {
            return (
              step.contacted?.who[LL.choices.serviceProvider[0]()] ||
              step.contacted?.who[LL.choices.serviceProvider[1]()] ||
              step.contacted?.who[LL.choices.serviceProvider[2]()] ||
              step.contacted?.who[LL.choices.serviceProvider[3]()] ||
              step.contacted?.who[LL.choices.serviceProvider[4]()] ||
              step.contacted?.who[LL.choices.serviceProvider[5]()]
            )
          }
          return true
        },
        { message: LL.errors.string(), path: ['contacted.who'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]()) {
            if (!step.contacted?.who['SASB']) {
              return (
                step.SASBNotContactedReasons[0] ||
                step.SASBNotContactedReasons[1] ||
                step.SASBNotContactedReasons[2] ||
                step.SASBNotContactedReasons[3] ||
                step.SASBNotContactedReasons[4] ||
                step.SASBNotContactedReasons[5] ||
                step.SASBNotContactedReasons[6]
              )
            }
          }
          return true
        },
        {
          message: LL.choices.placeholder(),
          path: ['SASBNotContactedReasons'],
        },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]() && step.contacted?.who['SASB']) {
            return step.treatFairPolite
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['treatFairPolite'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]() && step.contacted?.who['SASB']) {
            return step.moreThanOneCall
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['moreThanOneCall'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]() && step.contacted?.who['SASB']) {
            return step.bribe
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['bribe'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]() && step.contacted?.who['SASB']) {
            return step.anotherEntity
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['anotherEntity'] },
      )
      .refine(
        (step) => {
          if (step.contactedDrainageIssue === LL.choices.yesNo[0]() && step.contacted?.who['SASB']) {
            return step.problemResolved
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['problemResolved'] },
      )
      .refine(
        (step) => {
          if (
            step.contactedDrainageIssue === LL.choices.yesNo[0]() &&
            step.contacted?.who['SASB'] &&
            step.problemResolved === LL.choices.yesNo[0]()
          ) {
            return step.howLong
          }
          return true
        },
        { message: LL.choices.placeholder(), path: ['howLong'] },
      ),
    step22: z.object({
      revisePrice: z.string({
        invalid_type_error: LL.choices.placeholder(),
      }),
      willingPay: z.any().optional(),
      y: z.any().optional(),
    }),
  })

  return schema
}

export default validationSchema
