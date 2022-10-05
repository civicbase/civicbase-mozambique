import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'
import Typography from 'components/Typography'
import Quadratic from 'methods/Quadratic'

const Step8 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Your neighborhood is asked to help decide the monthly service sewer fee.
        Currently it is a 20 percent tax on your monthly water consumption cost.
        As you cast your votes or make your decisions, please imagine everyone
        else in your neighborhood will be participating in this exercise too.
      </Typography>

      <Typography>
        The monthly sewer fee covers the costs of maintaining and repairing the
        sewer lines. What should the monthly sewer service fee be for everyone
        in your neighborhood including yourself ?
      </Typography>

      <Typography>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each price option. If you dislike any of the
        options, you can also "downvote" them.
      </Typography>

      <Quadratic qs={['a', 'b', 'c']} step="step8" credits={1000} />
    </div>
  )
}

export default Step8
