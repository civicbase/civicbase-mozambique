import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

import image from '../../images/service_table.jpg'

const Step14 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const tooExpensive = watch('step14.fsm.tooExpensive')
  const tooCheap = watch('step14.fsm.tooCheap')
  const expensive = watch('step14.fsm.expensive')
  const greatValue = watch('step14.fsm.greatValue')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[14]()} />

      <div>
        <Typography css={tw`text-justify`}>
          <Caption css={tw`mr-3`}>4.34</Caption>
          {LL.questions[434]()}
        </Typography>

        {/* <div>
          <img src={image} alt="service" />
        </div> */}
      </div>

      <div>
        <Label number="4.35" required>
          {LL.questions[435]()}
        </Label>

        <div css={tw`mt-10`}>
          <Label>{tooExpensive} MT</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.tooExpensive`)}
          />
          <FieldErrorMessage name="step14.fsm.tooExpensive" errors={errors} />
        </div>
      </div>

      <div>
        <Label number="4.36" required>
          {LL.questions[436]()}
        </Label>

        <div css={tw`mt-10`}>
          <Label>{tooCheap} MT</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.tooCheap`)}
          />
          <FieldErrorMessage name="step14.fsm.tooCheap" errors={errors} />
        </div>
      </div>

      <div>
        <Label number="4.37" required>
          {LL.questions[437]()}
        </Label>

        <div css={tw`mt-10`}>
          <Label>{expensive} MT</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.expensive`)}
          />
          <FieldErrorMessage name="step14.fsm.expensive" errors={errors} />
        </div>
      </div>

      <div>
        <Label number="4.38" required>
          {LL.questions[438]()}
        </Label>

        <div css={tw`mt-10`}>
          <Label>{greatValue} MT</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.greatValue`)}
          />
          <FieldErrorMessage name="step14.fsm.greatValue" errors={errors} />
        </div>
      </div>
    </div>
  )
}

export default Step14
