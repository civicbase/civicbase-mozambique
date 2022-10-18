import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { useI18nContext } from 'i18n/i18n-react'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step27 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step27.revisePrice')
  const y = getValues('step12.willingPay') // 4.24

  useMemo(() => {
    const f = getValues('section6.finishAt')

    if (!f) {
      setValue('section6.finishAt', new Date().toISOString())
    }

    setValue('finishAt', new Date().toISOString())
  }, [])

  useMemo(() => {
    if (revisedPrice === LL.choices.revise[1]()) {
      setValue('step27.willingPay', y)
    }
  }, [revisedPrice])

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="6.24" required>
          {LL.questions[624]({ y })}
        </Label>

        <div css={tw`flex justify-between`}>
          {[LL.choices.revise[0](), LL.choices.revise[1](), LL.choices.revise[2]()].map((option) => (
            <label css={tw`flex flex-col space-y-2 items-center select-none mt-5`} key={option}>
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step27.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step27.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() || revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="6.25" required>
            {LL.questions.willingPay()}
          </Label>
          <Input
            {...register('step27.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step27?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step27.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step27
