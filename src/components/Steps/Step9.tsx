import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'
import Typography from 'components/Typography'
import Label from 'components/Form/Label'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'

const Step9 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const amount = watch('step9.amount_preference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        The monthly sewer fee covers the costs of maintaining and repairing the
        sewer lines. What should the monthly sewer service fee be for everyone
        in your neighborhood including yourself ?
      </Typography>

      <Typography>
        Please use the slider to indicate your preferred allocation from the pot
        on the left handside which is equivalent to (x amount). The current
        price is set to the present amount which is 20% of your water bill.
      </Typography>

      <div>
        <Label>${amount}</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="0"
          max="100"
          step="5"
          {...register(`step9.amount_preference`)}
        />
        <FieldErrorMessage name="step9.amount_preference" errors={errors} />
      </div>
    </div>
  )
}

export default Step9
