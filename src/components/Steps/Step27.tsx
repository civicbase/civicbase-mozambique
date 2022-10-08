import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step27 = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step27.revisePrice')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          On reflection, would you like to revise the previously stated price
          for a NEW monthly drainage maintenance fee ? Remember, your proposed
          price is (Y)
        </Label>

        <div css={tw`flex justify-between`}>
          {['Revise up', 'Stay the same', 'Revise down'].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step27.revisePrice`)} value={option} />
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
            {...register('step27.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step27?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step27.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step27
