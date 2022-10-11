import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step4 = () => {
  const {} = useFormContext()
  const { LL } = useI18nContext()

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

      <Typography css={tw`text-justify`}>{LL.questions.QVSRInfo()}</Typography>

      <Quadratic qs={questions} step="step4" />
    </div>
  )
}

export default Step4
