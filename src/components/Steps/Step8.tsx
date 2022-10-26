import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { memo, useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { getY } from 'utils/setY'

const Step8 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()

  const price = watch('step8.willingPay')
  const revisedPrice = watch('step8.revisePrice')
  const y = getY(getValues, {
    content: 'step7.content',
    treatment: 'step7.QVSR',
    control: 'step7.amountPreference',
  })

  useEffect(() => {
    const initial = getY(getValues, {
      content: 'step7.content',
      treatment: 'step7.QVSR',
      control: 'step7.amountPreference',
    })

    setValue('step8.willingPay', initial)
  }, [])

  useMemo(() => {
    if (revisedPrice === LL.choices.revise[1]()) {
      setValue('step8.willingPay', y)
    }
  }, [revisedPrice])

  const isReviseUp = revisedPrice === LL.choices.revise[0]()
  const isReviseDown = revisedPrice === LL.choices.revise[2]()

  const min = isReviseUp ? y : 0
  const max = isReviseDown ? y : y * 2

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[8]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.15</Caption>
        {LL.questions[415].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[415].paragraph2({ y })}</Typography>

      <div>
        <Label required>{LL.questions[415].paragraph3({ y })}</Label>

        <div css={tw`flex justify-between`}>
          {[LL.choices.revise[0](), LL.choices.revise[1](), LL.choices.revise[2]()].map((option) => (
            <label css={tw`flex flex-col space-y-2 items-center select-none mt-5`} key={option}>
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step8.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step8.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() || revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="4.16" required>
            {LL.questions.willingPay()}
          </Label>

          <Typography css={tw`mt-8 mb-2`}>{price} MT</Typography>

          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min={min}
            max={max}
            step={250}
            {...register('step8.willingPay')}
          />

          <FieldErrorMessage name="step8.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default memo(Step8)
