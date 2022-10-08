import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step21 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step21.revisePrice')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Revising WTP: Sewer Connection Fee" />

      <div>
        <Label number="5.20" required>
          On reflection, would you like to revise the previously stated price
          for the one time sewer connection fee? Remember, your proposed price
          is (Y)
        </Label>

        <div css={tw`flex justify-between`}>
          {['Revise up', 'Stay the same', 'Revise down'].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step21.revisePrice`)} value={option} />
            </label>
          ))}
        </div>
      </div>

      {(revisedPrice === 'Revise up' || revisedPrice === 'Revise down') && (
        <div>
          <Label number="5.21" required>
            Please let us know the new price that you would be willing to pay?
          </Label>
          <Input
            {...register('step21.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step21?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step21.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step21
