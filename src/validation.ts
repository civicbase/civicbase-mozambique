import * as z from 'zod'

const validationSchema = z.object({
  step1: z.object({
    uniqueId: z.string(),
    language: z.string(),
  }),
  step2: z.object({
    sanitationType: z.string(),
    dwellingType: z.string(),
    compare: z.string(),
    waterBill: z.object({
      share: z.string().optional(),
      shareNumber: z.number().optional(),
    }),
  }),
  // step1: z.object({
  //   unique_id: z.string().min(1, { message: 'Please input unique id' }),
  //   bill: z.object({
  //     shared: z.boolean(),
  //     month: z
  //       .string()
  //       .min(1, { message: 'Please input month of bill' })
  //       .optional(),
  //     consumption: z
  //       .number({ invalid_type_error: 'Expected number' })
  //       .optional(),
  //     cost: z.number({ invalid_type_error: 'Expected number' }).optional(),
  //     sanitation_tax_cost: z
  //       .number({ invalid_type_error: 'Expected number' })
  //       .optional(),
  //   }),
  // }),
  // step2: z.object({
  //   dwelling_type: z
  //     .string()
  //     .min(1, { message: 'Please select dwelling type' }),
  //   sanitation_type: z
  //     .string()
  //     .min(1, { message: 'Please select sanitation type' }),
  //   water_bill: z.object({
  //     share: z
  //       .string()
  //       .min(1, { message: 'Please select your water bill share status' }),
  //     share_number: z
  //       .number({ invalid_type_error: 'Expected number' })
  //       .optional(),
  //   }),
  //   split: z.number({ invalid_type_error: 'Expected number' }).optional(),
  //   split_pay: z.number({ invalid_type_error: 'Expected number' }).optional(),
  // }),
  // step3: z.any(),
  // step4: z.object({
  //   show_content: z.string(),
  // }),
  // step5: z.object({
  //   is_information_relevant: z
  //     .string()
  //     .min(1, { message: 'Please select an option' }),
  //   share_information: z
  //     .string()
  //     .min(1, { message: 'Please select an option' }),
  //   share_number: z
  //     .string()
  //     .min(1, { message: 'Please select an option' })
  //     .optional(),
  //   share_0: z
  //     .object({
  //       name: z.string().optional(),
  //       number: z.string().optional(),
  //     })
  //     .optional(),
  //   share_1: z
  //     .object({
  //       name: z.string().optional(),
  //       number: z.string().optional(),
  //     })
  //     .optional(),
  //   share_2: z
  //     .object({
  //       name: z.string().optional(),
  //       number: z.string().optional(),
  //     })
  //     .optional(),
  //   share_3: z
  //     .object({
  //       name: z.string().optional(),
  //       number: z.string().optional(),
  //     })
  //     .optional(),
  //   share_4: z
  //     .object({
  //       name: z.string().optional(),
  //       number: z.string().optional(),
  //     })
  //     .optional(),
  // }),
  // step6: z.any(),
  // step7: z.object({
  //   amount_preference: z
  //     .string()
  //     .min(1, { message: 'Please select an option' }),
  // }),
  // step8: z.any(),
  // step9: z.any(),
  // step10: z.any(),
  // step11: z.object({
  //   amount_preference: z
  //     .string()
  //     .min(1, { message: 'Please select an option' }),
  // }),
  // step12: z.object({
  //   connected_septic_tank: z
  //     .string()
  //     .min(1, { message: 'Please select an option' })
  //     .optional(),
  //   emptied_septic_tank: z
  //     .string()
  //     .min(1, { message: 'Please select an option' })
  //     .optional(),
  //   service_provider: z
  //     .object({
  //       contacted: z
  //         .string()
  //         .min(1, { message: 'Please select an option' })
  //         .optional(),
  //       last_time: z
  //         .string()
  //         .min(1, { message: 'Please select an option' })
  //         .optional(),
  //       contacted_who: z.any().optional(),
  //       requested_service: z.any().optional(),
  //       paid: z
  //         .string()
  //         .min(1, { message: 'Please select an option' })
  //         .optional(),
  //       how_much: z
  //         .number({ invalid_type_error: 'Expected number' })
  //         .optional(),
  //     })
  //     .optional(),
  // }),
  // step13: z.any(),
})

export default validationSchema
