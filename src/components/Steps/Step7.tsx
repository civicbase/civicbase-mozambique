import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import Quadratic from 'methods/Quadratic'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const QVSR = () => {
  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="WTP - Sewer Connection Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.13 Treatment - QVSR</Caption>In this survey,
        everyone in this neighborhood is being asked to help decide the price
        for the sewer connection fee. As you cast your votes or make your
        decisions, please imagine that everyone else in your neighborhood is
        also participating in this exercise. Thus, the collective decision by
        the neighborhood will be important for SASB to decide the pricing of
        their sewer connection fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        For households who would want a NEW sewer connection, they will be
        required to pay a ONE TIME fee which covers the material and labor cost
        of constructing the sewer lines. What should the sewer connection fee be
        for everyone in your neighborhood including yourself ? You may allocate
        your votes for more than one of the price options below.
      </Typography>

      <Typography css={tw`text-justify`}>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each price option. If you do not prefer any of
        the options, you can also "downvote" them.
      </Typography>

      <Quadratic
        qs={['7000', '7500', '8000', '8500', '9000', '9500', '10000']}
        step="step7.QVSR"
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
      <Heading subtitle="WTP - Sewer Connection Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.14 Control - Price Slider</Caption>In this
        survey, everyone in this neighborhood is being asked to help decide the
        price for the sewer connection fee. As you cast your votes or make your
        decisions, please imagine that everyone else in your neighborhood is
        also participating in this exercise. Thus, the collective decision by
        the neighborhood will be important for SASB to decide the pricing of
        their sewer connection fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        For households who would want a NEW sewer connection, they will be
        required to pay a ONE TIME fee which covers the material and labor cost
        of constructing the sewer lines. What should the sewer connection fee be
        for everyone in your neighborhood including yourself ? You may allocate
        your votes for more than one of the price options below.
      </Typography>

      <Typography css={tw`text-justify`}>
        Please use the slider to indicate your preferred price.
      </Typography>

      <div>
        <Label>${amount} MT</Label>
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
  const { getValues } = useFormContext()
  const content = getValues('step7.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step7
