import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Typography from 'components/Typography'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step11 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const amount = watch('step11.amount_preference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
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

      <div>
        <Label>${amount}</Label>
        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="0"
          max="100"
          step="5"
          {...register(`step11.amount_preference`)}
        />
        <FieldErrorMessage name="step11.amount_preference" errors={errors} />
      </div>
    </div>
  )
}

export default memo(Step11)
