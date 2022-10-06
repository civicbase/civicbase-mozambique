import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step10 = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step10.revisePrice')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Now we would like to share with you what your community thinks about the
        price to be paid for the monthly sanitation tax
      </Typography>

      <Typography>
        For the monthly sanitation tax, They propose an average price of (X).
        You proposed the price (Y).
      </Typography>

      <div>
        <Label number="4.19" required>
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
              <Radio {...register(`step10.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step10.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === 'Revise up' || revisedPrice === 'Revise down') && (
        <div>
          <Label required>
            Please let us know the new price that you would be willing to pay?
          </Label>
          <Input
            {...register('step10.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step10?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step10.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step10
