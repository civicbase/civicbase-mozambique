import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step18 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()

  const price = watch('step18.willingPay')
  const revisedPrice = watch('step18.revisePrice')
  const y = getValues('step7.willingPay') //4.16

  useEffect(() => {
    if (revisedPrice === LL.choices.revise[1]()) {
      setValue('step18.willingPay', y)
    }
  }, [revisedPrice])

  const isReviseUp = revisedPrice === LL.choices.revise[0]()
  const isReviseDown = revisedPrice === LL.choices.revise[2]()

  const min = isReviseUp ? y : 0
  const max = isReviseDown ? y : y * 2

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[21]()} />

      <div>
        <Label number="5.20" required>
          {LL.questions[520]({ y })}
        </Label>

        <div css={tw`flex justify-between`}>
          {[LL.choices.revise[0](), LL.choices.revise[1](), LL.choices.revise[2]()].map((option) => (
            <label css={tw`flex flex-col space-y-2 items-center select-none mt-5`} key={option}>
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step18.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step18.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() || revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="5.21" required>
            {LL.questions.willingPay()}
          </Label>

          <Typography css={tw`mt-8 mb-2`}>{price} MT</Typography>

          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min={min}
            max={max}
            step={250}
            {...register('step18.willingPay')}
          />

          <FieldErrorMessage name="step18.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step18
