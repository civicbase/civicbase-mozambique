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
      <Heading subtitle="WTP - Monthly Sanitation Tax/Sewer Service Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.21</Caption>NOW, imagine that SASB were to
        introduce a new monthly fee to solve drainage issues in your
        neighborhood. We will be asking you about your willingness to pay for
        such a fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        In this survey, everyone in this neighborhood is being asked to help
        decide the price for NEW monthly drainage fee. This new fee could help
        SASB to reduce the drainage problem in your neighborhood like flooding
        and water logging. As you cast your votes or make your decisions, please
        imagine everyone else in your neighborhood will be participating in this
        exercise too. Thus, the collective decision by the neighborhood will be
        important for SASB to decide the pricing of their services.
      </Typography>

      <Typography css={tw`text-justify`}>
        IF SASB were to introduce the new monthly fee to improve drainage
        conditions in your neighborhood, what should the monthly service fee be
        for everyone in your neighborhood including yourself?
      </Typography>

      <Typography css={tw`text-justify`}>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each price option. If you dislike any of the
        options, you can also "downvote" them.
      </Typography>

      <Quadratic
        qs={[
          '30 MT',
          '35 MT',
          '40 MT',
          '45 MT',
          '50 MT',
          '55 MT',
          '60 MT',
          '65 MT',
          '70 MT',
        ]}
        step="step11.QVSR"
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
      <Heading subtitle="WTP - Monthly Sanitation Tax/Sewer Service Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.22</Caption>NOW, imagine that SASB were to
        introduce a new monthly fee to solve drainage issues in your
        neighborhood. We will be asking you about your willingness to pay for
        such a fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        In this survey, everyone in this neighborhood is being asked to help
        decide the price for NEW monthly drainage fee. This new fee could help
        SASB to reduce the drainage problem in your neighborhood like flooding
        and water logging. As you cast your votes or make your decisions, please
        imagine everyone else in your neighborhood will be participating in this
        exercise too. Thus, the collective decision by the neighborhood will be
        important for SASB to decide the pricing of their services.
      </Typography>

      <Typography css={tw`text-justify`}>
        IF SASB were to introduce the new monthly fee to improve drainage
        conditions in your neighborhood, what should the monthly service fee be
        for everyone in your neighborhood including yourself?
      </Typography>

      <Typography css={tw`text-justify`}>
        Please use the slider to indicate your preferred price.
      </Typography>

      <div>
        <Label>{fee} MT</Label>
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
  const { getValues } = useFormContext()
  const content = getValues('step11.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step11
