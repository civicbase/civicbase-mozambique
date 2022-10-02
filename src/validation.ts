import * as z from 'zod'

const validationSchema = z.object({
  step1: z.object({
    unique_id: z.string().min(1, { message: 'Please input unique id' }),
    bill: z.object({
      description: z.string().min(1, { message: 'Please input latest bill' }),
      month: z.string().min(1, { message: 'Please input month of bill' }),
      consumption: z.number({ invalid_type_error: 'Expected number' }),
      cost: z.number({ invalid_type_error: 'Expected number' }),
      sanitation_tax_cost: z.number({ invalid_type_error: 'Expected number' }),
    }),
  }),
  step2: z.object({
    dwelling_type: z
      .string()
      .min(1, { message: 'Please select dwelling type' }),
    sanitation_type: z
      .string()
      .min(1, { message: 'Please select sanitation type' }),
    water_bill: z.object({
      share: z
        .string()
        .min(1, { message: 'Please select your water bill share status' }),
      share_number: z
        .number({ invalid_type_error: 'Expected number' })
        .optional(),
    }),
    split: z.number({ invalid_type_error: 'Expected number' }).optional(),
    split_pay: z.number({ invalid_type_error: 'Expected number' }).optional(),
  }),
  step3: z.any(),
  step4: z.any(),
  step5: z.object({
    is_information_relevant: z
      .string()
      .min(1, { message: 'Please select an option' }),
    share_information: z
      .string()
      .min(1, { message: 'Please select an option' }),
    share_number: z
      .string()
      .min(1, { message: 'Please select an option' })
      .optional(),
    share_0: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
      })
      .optional(),
    share_1: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
      })
      .optional(),
    share_2: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
      })
      .optional(),
    share_3: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
      })
      .optional(),
    share_4: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
      })
      .optional(),
  }),
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
