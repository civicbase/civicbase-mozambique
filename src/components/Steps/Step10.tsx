import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step10 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step10.revisePrice')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[10]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.19</Caption>
        {LL.questions[419].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions[419].paragraph2()}
      </Typography>

      <div>
        <Label required>{LL.questions[419].paragraph3()}</Label>

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
              <Radio {...register(`step10.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step10.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() ||
        revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="4.20" required>
            {LL.questions.willingPay()}
          </Label>
          <Input
            {...register('step10.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step10?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step10.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step10
