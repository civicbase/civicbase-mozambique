import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Typography from 'components/Typography'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const QVSR = () => {
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

      <Quadratic
        qs={['7000', '7500', '8000', '8500', '9000', '9500', '10000']}
        step="step7.QVSR"
        credits={1000}
      />
    </div>
  )
}

const Slider = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const amount = watch('step7.amountPreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Connecting to the network will require a one time fee which covers the
        material and labor cost of constructing the sewer lines. What should the
        sewer connection fee be for everyone in your neighborhood including
        yourself ?
      </Typography>

      <Typography>
        Please use the slider to indicate your preferred allocation from the pot
        on the left handside which is equivalent to (x amount). The current
        price is set to the average price paid for sewer connections in your
        neighborhood which is (X)
      </Typography>

      <div>
        <Label>${amount}</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="7000"
          max="10000"
          step="500"
          {...register(`step7.amountPreference`)}
        />
        <FieldErrorMessage name="step7.amountPreference" errors={errors} />
      </div>
    </div>
  )
}

const Step7 = () => {
  const { setValue } = useFormContext()
  const isHeads = Math.random() < 0.5

  setValue('step7.showContent', isHeads ? 'QVSR' : 'Slider')

  if (isHeads) {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step7
