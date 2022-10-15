import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step24 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step24.revisePrice')
  const y = getValues('step14.fsm.greatValue')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[24]()} />

      <div>
        <Label number="5.30" required>
          {LL.questions[530]({ y })}
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
              <Radio {...register(`step24.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step24.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() ||
        revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="5.31" required>
            {LL.questions.willingPay()}
          </Label>
          <Input
            {...register('step24.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step24?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step24.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step24
