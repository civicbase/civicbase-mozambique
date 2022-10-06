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
        NOW, imagine that SASB were to introduce a new monthly fee to solve
        drainage issues in your neighborhood. We will be asking you about your
        willingness to pay for such a fee.
      </Typography>

      <Typography>
        In this survey, everyone in this neighborhood is being asked to help
        decide the price for NEW monthly drainage fee. This new fee could help
        SASB to reduce the drainage problem in your neighborhood like flooding
        and water logging. As you cast your votes or make your decisions, please
        imagine everyone else in your neighborhood will be participating in this
        exercise too. Thus, the collective decision by the neighborhood will be
        important for SASB to decide the pricing of their services.
      </Typography>

      <Typography>
        IF SASB were to introduce the new monthly fee to improve drainage
        conditions in your neighborhood, what should the monthly service fee be
        for everyone in your neighborhood including yourself?
      </Typography>

      <Typography>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each price option. If you dislike any of the
        options, you can also "downvote" them.
      </Typography>

      <Quadratic
        qs={['30', '35', '40', '45', '50', '55', '60', '65', '70']}
        step="step11.QVSR"
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

  const fee = watch('step11.feePreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        NOW, imagine that SASB were to introduce a new monthly fee to solve
        drainage issues in your neighborhood. We will be asking you about your
        willingness to pay for such a fee.
      </Typography>

      <Typography>
        In this survey, everyone in this neighborhood is being asked to help
        decide the price for NEW monthly drainage fee. This new fee could help
        SASB to reduce the drainage problem in your neighborhood like flooding
        and water logging. As you cast your votes or make your decisions, please
        imagine everyone else in your neighborhood will be participating in this
        exercise too. Thus, the collective decision by the neighborhood will be
        important for SASB to decide the pricing of their services.
      </Typography>

      <Typography>
        IF SASB were to introduce the new monthly fee to improve drainage
        conditions in your neighborhood, what should the monthly service fee be
        for everyone in your neighborhood including yourself?
      </Typography>

      <Typography>
        Please use the slider to indicate your preferred price.
      </Typography>

      <div>
        <Label>${fee}</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="30"
          max="70"
          step="5"
          {...register(`step11.feePreference`)}
        />
        <FieldErrorMessage name="step11.feePreference" errors={errors} />
      </div>
    </div>
  )
}

const Step11 = () => {
  const { setValue } = useFormContext()
  const isHeads = Math.random() < 0.5

  setValue('step11.showContent', isHeads ? 'QVSR' : 'Slider')

  if (isHeads) {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step11
