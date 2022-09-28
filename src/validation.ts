import * as z from 'zod'

const validationSchema = z.object({
  step1: z.object({
    unique_id: z.string().min(1, { message: 'Please input unique id' }),
    bill: z.object({
      description: z.string().min(1, { message: 'Please input latest bill' }),
      month: z.string().min(1, { message: 'Please input month of bill' }),
      consumption: z
        .string()
        .min(1, { message: 'Please select total consumption' }),
      cost: z.string().min(1, { message: 'Please input cost incurred' }),
      sanitation_tax_cost: z
        .string()
        .min(1, { message: 'Please input sanitation tax cost' }),
    }),
  }),
  step2: z.any(),
  step3: z.any(),
  step4: z.any(),
  step5: z.any(),
  step6: z.any(),
  step7: z.any(),
  step8: z.any(),
  step9: z.any(),
  step10: z.any(),
  step11: z.any(), // TODO
  step12: z.any(),
  step13: z.any(),
})

export default validationSchema
