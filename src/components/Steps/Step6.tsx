import Typography from 'components/Typography'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step6 = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Your neighborhood is asked to help decide the sewer connection fee. As
        you cast your votes or make your decisions, please imagine everyone else
        in your neighborhood will be participating in this exercise too.
      </Typography>

      <Typography>
        Connecting to the network will require a one time fee which covers the
        material and labor cost of constructing the sewer lines. What should the
        sewer connection fee be for everyone in your neighborhood including
        yourself ? You may allocate your votes for more than one of the price
        options below.
      </Typography>

      <Typography>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each price option. If you dislike any of the
        options, you can also "downvote" them. The current price is set to the
        average price paid for sewer connections in your neighborhood which is
        (X)
      </Typography>

      <Quadratic qs={['a', 'b', 'c']} step="step6" credits={1000} />
    </div>
  )
}

export default Step6
