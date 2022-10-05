import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'
import Typography from 'components/Typography'
import Quadratic from 'methods/Quadratic'

const Step10 = () => {
  const {} = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Your neighborhood is asked to help decide a new fee to improve drainage
        and solve the drainage problem in your neighborhood. As you cast your
        votes or make your decisions, please imagine everyone else in your
        neighborhood will be participating in this exercise too.
      </Typography>

      <Typography>
        This new drainage maintenance fee will be used to improve drainage
        conditions and reduce water logging and flooding in your neighborhood.
        What should the monthly service fee for drainage maintenance be for
        everyone in your neighborhood including yourself ?
      </Typography>

      <Typography>
        Please look at the options provided and indicate your preferred
        allocation to sewer service fee from the tokens available, which are
        equivalent to (x amount).
      </Typography>

      <Quadratic qs={['a', 'b', 'c']} step="step10" credits={1000} />
    </div>
  )
}

export default Step10
