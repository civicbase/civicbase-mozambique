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
        <Caption css={tw`mr-3`}>4.17 Treatment - QVSR</Caption>NOW, we will be
        asking you about your willingness to pay for the monthly sanitation tax
        or sewer service fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        In this survey, everyone in this neighborhood is being asked to help
        decide the price for the monthly sanitation tax or the sewer service
        fee. Currently, this constitutes 20 percent of your water bill. Based on
        the infromation we collected, this is roughly 80 meticals per month for
        each household across Beira. As you cast your votes or make your
        decisions, please imagine everyone else in your neighborhood will be
        participating in this exercise too. Thus, the collective decision by the
        neighborhood will be important for SASB to decide the pricing of their
        services.
      </Typography>

      <Typography css={tw`text-justify`}>
        The monthly sanitation tax covers the costs of maintaining and repairing
        the sewer lines. What should the monthly tax be for everyone in your
        neighborhood including yourself ?
      </Typography>

      <Typography css={tw`text-justify`}>
        Please look at the options provided and indicate how many votes you
        would like to allocate to each price option. If you dislike any of the
        options, you can also "downvote" them.
      </Typography>

      <Quadratic
        qs={[
          '64 MT',
          '68 MT',
          '72 MT',
          '76 MT',
          '80 MT',
          '84 MT',
          '88 MT',
          '92 MT',
          '96 MT',
        ]}
        step="step9.QVSR"
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

  const price = watch('step9.pricePreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="WTP - Monthly Sanitation Tax/Sewer Service Fee" />

      <Typography css={tw`text-justify`}>
        <Caption css={tw`mr-3`}>4.18 Control - Price Slider</Caption>NOW, we
        will be asking you about your willingness to pay for the monthly
        sanitation tax or sewer service fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        In this survey, everyone in this neighborhood is being asked to help
        decide the price for the monthly sanitation tax or the sewer service
        fee. Currently, this constitutes 20 percent of your water bill. Based on
        the infromation we collected, this is roughly 80 meticals per month for
        each household across Beira. As you cast your votes or make your
        decisions, please imagine everyone else in your neighborhood will be
        participating in this exercise too. Thus, the collective decision by the
        neighborhood will be important for SASB to decide the pricing of their
        services.
      </Typography>

      <Typography css={tw`text-justify`}>
        The monthly sanitation tax covers the costs of maintaining and repairing
        the sewer lines. What should the monthly tax be for everyone in your
        neighborhood including yourself?
      </Typography>

      <Typography css={tw`text-justify`}>
        Please use the slider to indicate your preferred price.
      </Typography>

      <div>
        <Label>{price} MT</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="64"
          max="96"
          step="4"
          {...register(`step9.pricePreference`)}
        />
        <FieldErrorMessage name="step9.pricePreference" errors={errors} />
      </div>
    </div>
  )
}

const Step9 = () => {
  const { getValues } = useFormContext()
  const content = getValues('step9.content')

  if (content === 'Treatment - QVSR') {
    return <QVSR />
  } else {
    return <Slider />
  }
}

export default Step9
