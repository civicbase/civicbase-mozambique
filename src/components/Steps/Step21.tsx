import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step21 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step21.revisePrice')
  const y = getValues('step8.willingPay') //4.16

  useMemo(() => {
    if (revisedPrice === LL.choices.revise[1]()) {
      setValue('step21.willingPay', y)
    }
  }, [revisedPrice])

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
              <Radio {...register(`step21.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step21.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() || revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="5.21" required>
            {LL.questions.willingPay()}
          </Label>
          <Input
            {...register('step21.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step21?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step21.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step21
