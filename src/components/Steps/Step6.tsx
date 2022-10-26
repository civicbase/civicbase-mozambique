import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Quadratic as QuadraticType } from 'types.d'
import tw from 'twin.macro'
import PanelExpand from 'components/PanelExpand'
import VoteSummary from 'components/VoteSummary'
import Button from 'components/Button'
import { hasVoted } from 'utils/quadratic'

const QVSR = () => {
  const { watch } = useFormContext()
  const { LL } = useI18nContext()
  const [isReset, setReset] = useState(false)

  const results: QuadraticType = watch('step6.QVSR')
  const isVoted = hasVoted(results)

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[7]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.13 Treatment - QVSR</Caption>
        {LL.questions[413]()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions.QVSRInstruction()}</Typography>

      <Quadratic qs={['6500 MT', '7500 MT', '8500 MT', '9500 MT', '10500 MT']} isReset={isReset} step="step6.QVSR" />

      <PanelExpand title="The allocation of your votes:">
        <VoteSummary results={results} />
      </PanelExpand>

      <div css={tw`flex space-x-2`}>
        <Typography>{LL.choices.QVSRReset()}</Typography>

        <div css={tw`flex justify-center`}>
          <Button
            css={tw`height[fit-content]`}
            type="button"
            variant="tertiary"
            onClick={() => {
              setReset(true)
              setTimeout(() => setReset(false), 1000)
            }}
          >
            {LL.placeholder.reset()}
          </Button>
        </div>
      </div>
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

  const amount = watch('step6.amountPreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="WTP - Sewer Connection Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.14 Control - Price Slider</Caption>
        {LL.questions[414]()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions.SliderInstruction()}</Typography>

      <div>
        <Label>{amount} MT</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="6500"
          max="10500"
          step="500"
          {...register(`step6.amountPreference`)}
        />
        <FieldErrorMessage name="step6.amountPreference" errors={errors} />
      </div>
    </div>
  )
}

const Step6 = () => {
  const { getValues } = useFormContext()
  const content = getValues('step6.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step6
