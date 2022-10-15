import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step27 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step27.revisePrice')
  const y = getValues('step11.feePreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="6.24" required>
          {LL.questions[624]({ y })}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.revise[0](),
            LL.choices.revise[1](),
            LL.choices.revise[2](),
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step27.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step27.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() ||
        revisedPrice === LL.choices.revise[2]()) && (
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
