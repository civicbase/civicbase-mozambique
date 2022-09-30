import Typography from 'components/Typography'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const questions = [
    'piped water network',
    'sewer network in your city',
    'Drainage network in your city',
    'electricity coverage in your city',
    'coverage of paved roads in your city',
    'Coastal embankments',
  ]

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Your neighborhood is asked to participate in a vote. When you make your
        decisions, please imagine everyone else in your neighborhood will be
        participating in this exercise too.
      </Typography>

      <Typography>
        Please look at the options provided and indicate how much votes you
        would like to allocate to each option. If you dislike any of the
        options, you can also "downvote" them.
      </Typography>

      <Typography>
        Now, Imagine that the city of Beira has received MONEY to improve its
        public services. In your opinion, which of the different options is
        IMPORTANT to you? You may allocate your votes for more than one option.
        Invest the money to improve the quality and to expand the...
      </Typography>

      <Quadratic qs={questions} step="step3" />
    </div>
  )
}

export default Step3
