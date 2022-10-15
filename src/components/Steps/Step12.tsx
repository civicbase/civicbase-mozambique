import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { getMostVoted } from 'utils/quadratic'

const Step12 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step12.revisePrice')

  let value = 0
  const content = getValues('step11.content')

  if (content === 'Treatment - QVSR') {
    const quadratic = getValues('step11.QVSR')
    const mostVoted = getMostVoted(quadratic)
    if (mostVoted) {
      value = mostVoted.statement.match(/\d+/) as any
    }
  } else {
    const slider = getValues('step11.feePreference')
    value = slider.match(/\d+/) as any
  }

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[12]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.23</Caption>
        {LL.questions[423].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions[423].paragraph2({ y: value })}
      </Typography>

      <div>
        <Label required>{LL.questions[423].paragraph3({ y: value })}</Label>

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
              <Radio {...register(`step12.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step12.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === LL.choices.revise[0]() ||
        revisedPrice === LL.choices.revise[2]()) && (
        <div>
          <Label number="4.24" required>
            {LL.questions.willingPay()}
          </Label>
          <Input
            {...register('step12.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step12?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step12.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step12
