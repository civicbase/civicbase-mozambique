import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const QVSR = () => {
  const { LL } = useI18nContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[7]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.13 Treatment - QVSR</Caption>
        {LL.questions[413].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions[413].paragraph2()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions.QVSRInstruction()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions.QVSRInfo()}</Typography>

      <Quadratic
        qs={[
          '6500 MT',
          '7000 MT',
          '7500 MT',
          '8000 MT',
          '8500 MT',
          '9000 MT',
          '9500 MT',
          '10000 MT',
          '10500 MT',
        ]}
        step="step7.QVSR"
      />
    </div>
  )
}

const Slider = () => {
  const { LL } = useI18nContext()
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const amount = watch('step7.amountPreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="WTP - Sewer Connection Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.14 Control - Price Slider</Caption>
        {LL.questions[414].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions[414].paragraph2()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions.SliderInstruction()}
      </Typography>

      <div>
        <Label>{amount} MT</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="6500"
          max="10500"
          step="500"
          {...register(`step7.amountPreference`)}
        />
        <FieldErrorMessage name="step7.amountPreference" errors={errors} />
      </div>
    </div>
  )
}

const Step7 = () => {
  const { getValues } = useFormContext()
  const content = getValues('step7.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step7
