import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step28 = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step28.revise_stated_price')

  console.log('errors', errors)

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          Having shared your experience with the drainage conditions in your
          neighborhood, would you like to revise the previously stated price for
          the monthly drainage maintenance fee ? Remember, your proposed price
          is (Y)
        </Label>

        <div css={tw`flex justify-between`}>
          {['Revise up', 'Stay the same', 'Revise down'].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio
                {...register(`step28.revise_stated_price`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      {(revisedPrice === 'Revise up' || revisedPrice === 'Revise down') && (
        <div>
          <Label required>
            Please let us know the new price that you would be willing to pay?
          </Label>
          <Input
            {...register('step28.willing_pay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step28?.willing_pay}
            type="number"
          />

          <FieldErrorMessage name="step28.willing_pay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step28