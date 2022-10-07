import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step4 = () => {
  const {} = useFormContext()

  const questions = [
    'piped water provision for households in the city',
    'sewer connection services for toilets in the city ',
    'improved drainage provision in the city',
    'electricity supply for households in your city.',
    'coverage of paved roads in your city.',
  ]

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Service Prioritization" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.8</Caption>Households in your neighborhood are
        being asked to participate in a vote. When you make your decisions,
        please imagine everyone else in your neighborhood will be participating
        in this exercise too.
      </Typography>

      <Typography css={tw`text-justify`}>
        As a resident of the City of Beira, which of the public service options
        below do you VALUE MOST?
      </Typography>

      <Typography css={tw`text-justify`}>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each option. If you do not prefer any of the
        options, you can also "downvote" them.
      </Typography>

      <Quadratic qs={questions} step="step4" />
    </div>
  )
}

export default Step4
