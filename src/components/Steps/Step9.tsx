import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { getY } from 'utils/setY'

const Step9 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()

  const price = watch('step9.willingPay')
  const revisedPrice = watch('step9.revisePrice')
  const x = getValues('step9.x')
  const y = getY(getValues, {
    content: 'step8.content',
    treatment: 'step8.QVSR',
    control: 'step8.pricePreference',
  })

  useEffect(() => {
    if (y) {
      setValue('step9.y', y)
    }
  }, [y])

  useEffect(() => {
    if (revisedPrice === LL.choices.revise[1]()) {
      setValue('step9.willingPay', y)
    }
  }, [revisedPrice])

  const isReviseUp = revisedPrice === LL.choices.revise[0]()
  const isReviseDown = revisedPrice === LL.choices.revise[2]()

  const min = isReviseUp ? y : 0
  const max = isReviseDown ? y : y * 2

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[10]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.19</Caption>
        {LL.questions[419].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[419].paragraph2({ y, x })}</Typography>

      <div>
        <Label required>{LL.questions[419].paragraph3({ y })}</Label>

        <div css={tw`flex justify-between`}>
          {[LL.choices.revise[0](), LL.choices.revise[1](), LL.choices.revise[2]()].map((option) => (
            <label css={tw`flex flex-col space-y-2 items-center select-none mt-5`} key={option}>
              <span>{option}</span>
              <Radio {...register(`step9.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step9.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() || revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="4.20" required>
            {LL.questions.willingPay()}
          </Label>

          <Typography css={tw`mt-8 mb-2`}>{price} MT</Typography>

          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min={min}
            max={max}
            step={4}
            {...register('step9.willingPay')}
          />

          <FieldErrorMessage name="step9.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step9
