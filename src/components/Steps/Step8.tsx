import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { getMostVoted } from 'utils/quadratic'

const Step8 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext()

  const content = getValues('step7.content')

  let value = 0

  if (content === 'Treatment - QVSR') {
    const quadratic = getValues('step7.QVSR')
    const mostVoted = getMostVoted(quadratic)
    if (mostVoted) {
      value = mostVoted.statement.match(/\d+/) as any
    }
  } else {
    const slider = getValues('step7.amountPreference')
    value = slider.match(/\d+/) as any
  }

  const revisedPrice = watch('step8.revisePrice')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[8]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.15</Caption>
        {LL.questions[415].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions[415].paragraph2({ y: value })}
      </Typography>

      <div>
        <Label required>{LL.questions[415].paragraph3({ y: value })}</Label>

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
              <Radio {...register(`step8.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step8.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() ||
        revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="4.16" required>
            {LL.questions.willingPay()}
          </Label>
          <Input
            {...register('step8.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step8?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step8.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default memo(Step8)
