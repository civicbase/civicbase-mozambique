import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { useState } from 'react'
import { Quadratic as QuadraticType } from 'types.d'
import PanelExpand from 'components/PanelExpand'
import VoteSummary from 'components/VoteSummary'
import Button from 'components/Button'
import { hasVoted } from 'utils/quadratic'

const QVSR = () => {
  const { LL } = useI18nContext()
  const { watch } = useFormContext()
  const [isReset, setReset] = useState(false)
  const results: QuadraticType = watch('step11.QVSR')
  const isVoted = hasVoted(results)

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[11]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.21</Caption>
        {LL.questions[421].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[421].paragraph2()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions[421].paragraph3()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions.QVSRInstruction()}</Typography>

      <Quadratic
        qs={['30 MT', '35 MT', '40 MT', '45 MT', '50 MT', '55 MT', '60 MT', '65 MT', '70 MT']}
        isReset={isReset}
        step="step11.QVSR"
      />

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

  const fee = watch('step11.feePreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="WTP - Monthly Sanitation Tax/Sewer Service Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.22</Caption>
        {LL.questions[422].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[422].paragraph2()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions[422].paragraph3()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions.SliderInstruction()}</Typography>

      <div>
        <Label>{fee} MT</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="0"
          max="80"
          step="10"
          {...register(`step11.feePreference`)}
        />
        <FieldErrorMessage name="step11.feePreference" errors={errors} />
      </div>
    </div>
  )
}

const Step11 = () => {
  const { getValues } = useFormContext()
  const content = getValues('step11.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step11
