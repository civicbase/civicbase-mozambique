import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { Quadratic as QuadraticType } from 'types.d'
import PanelExpand from 'components/PanelExpand'
import VoteSummary from 'components/VoteSummary'
import Button from 'components/Button'
import { hasVoted } from 'utils/quadratic'

const QVSR = () => {
  const { LL } = useI18nContext()
  const { watch } = useFormContext()
  const [isReset, setReset] = useState(false)
  const results: QuadraticType = watch('step9.QVSR')
  const isVoted = hasVoted(results)

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[9]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.17 Treatment - QVSR</Caption>
        {LL.questions[417].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[417].paragraph2()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions[417].paragraph3()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions.QVSRInstruction()}</Typography>

      {/* <Typography css={tw`text-justify`}>{LL.questions.QVSRInfo()}</Typography> */}

      <Quadratic
        qs={['64 MT', '68 MT', '72 MT', '76 MT', '80 MT', '84 MT', '88 MT', '92 MT', '96 MT']}
        isReset={isReset}
        step="step9.QVSR"
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

  const price = watch('step9.pricePreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="WTP - Monthly Sanitation Tax/Sewer Service Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.18 Control - Price Slider</Caption>
        {LL.questions[418].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[418].paragraph2()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions[418].paragraph3()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions.SliderInstruction()}</Typography>

      <div>
        <Label>{price} MT</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="64"
          max="96"
          step="4"
          {...register(`step9.pricePreference`)}
        />
        <FieldErrorMessage name="step9.pricePreference" errors={errors} />
      </div>
    </div>
  )
}

const Step9 = () => {
  const { getValues } = useFormContext()
  const content = getValues('step9.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step9
