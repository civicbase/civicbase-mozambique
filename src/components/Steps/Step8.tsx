import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step8 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step8.revisePrice')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography css={tw`text-justify`}>
        Now we would like to share with you what your community thinks about the
        price to be paid for the sewer connection fee.
      </Typography>

      <Typography css={tw`text-justify`}>
        For the sewer connection fee. They propose an average price of (X),
        whereas you proposed the price (Y).
      </Typography>

      <div>
        <Label number="4.15" required>
          Having heard the community's proposal , would you like to revise your
          previously stated price? Remember, your proposed price is (Y)
        </Label>

        <div css={tw`flex justify-between`}>
          {['Revise up', 'Stay the same', 'Revise down'].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step8.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step8.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === 'Revise up' || revisedPrice === 'Revise down') && (
        <div>
          <Label number="4.16" required>
            Please let us know the new price that you would be willing to pay?
          </Label>
          <Input
            {...register('step8.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step8?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step8.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step8
