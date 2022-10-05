import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step7 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const amount = watch('step7.amount_preference')

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
          min="0"
          max="100"
          step="5"
          {...register(`step7.amount_preference`)}
        />
        <FieldErrorMessage name="step7.amount_preference" errors={errors} />
      </div>
    </div>
  )
}

export default Step7
