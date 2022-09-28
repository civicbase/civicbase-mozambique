import * as z from 'zod'

const validationSchema = z.object({
  recording: z.instanceof(Blob).nullable(),
  method: z.string(),
  step1: z.object({}),
  step2: z.object({}),
  step3: z.object({}),
  step4: z.object({}),
  step5: z.object({}),
  step6: z.object({}),
  step7: z.object({}),
  step8: z.object({}),
  step9: z.object({}),
  step10: z.any(),
  step11: z.any(), // TODO
  step12: z.any(),
  step13: z.any(),
})

export default validationSchema
