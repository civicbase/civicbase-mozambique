import Button from 'components/Button'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import PanelExpand from 'components/PanelExpand'
import Typography, { Caption } from 'components/Typography'
import VoteSummary from 'components/VoteSummary'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { Quadratic as QuadraticType } from 'types.d'
import { hasVoted } from 'utils/quadratic'

const Step4 = () => {
  const { watch } = useFormContext()
  const { LL } = useI18nContext()
  const [isReset, setReset] = useState(false)

  const results: QuadraticType = watch('step4')
  const isVoted = hasVoted(results)

  const questions = [
    LL.choices[48][0](),
    LL.choices[48][1](),
    LL.choices[48][2](),
    LL.choices[48][3](),
    LL.choices[48][4](),
  ]

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[4]()} />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.8</Caption>
        {LL.questions[48].paragraph1()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions[48].paragraph2()}
      </Typography>

      <Typography css={tw`text-justify`}>
        {LL.questions.QVSRInstruction()}
      </Typography>

      {/* <Typography css={tw`text-justify`}>{LL.questions.QVSRInfo()}</Typography> */}

      <Quadratic qs={questions} isReset={isReset} step="step4" sort={true} />

      {results && isVoted && (
        <PanelExpand title="The allocation of your votes:">
          <VoteSummary results={results} />
        </PanelExpand>
      )}

      {results && isVoted && (
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
      )}
    </div>
  )
}

export default Step4
