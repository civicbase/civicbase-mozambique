import Button from 'components/Button'
import Heading from 'components/Heading'
import PanelExpand from 'components/PanelExpand'
import Typography, { Caption } from 'components/Typography'
import VoteSummary from 'components/VoteSummary'
import { Question } from 'hooks/use-quadratic'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step4 = () => {
  const { watch, setValue } = useFormContext()
  const { LL } = useI18nContext()
  const questions = watch('step4')

  const handleReset = () => {
    const resetQuestions = questions.map((q: Question) => ({ ...q, vote: 0, credits: 0 }))
    setValue('step4', resetQuestions)
  }

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[4]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.8</Caption>
        {LL.questions[48].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>{LL.questions[48].paragraph2()}</Typography>

      <Typography css={tw`text-justify`}>{LL.questions.QVSRInstruction()}</Typography>

      <Quadratic name="step4" />

      <PanelExpand title="The allocation of your votes:">
        <VoteSummary results={questions} />
      </PanelExpand>

      <div css={[tw`flex space-x-2`]}>
        <Typography>{LL.choices.QVSRReset()}</Typography>

        <div css={tw`flex justify-center`}>
          <Button css={tw`height[fit-content]`} type="button" variant="tertiary" onClick={handleReset}>
            {LL.placeholder.reset()}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Step4
