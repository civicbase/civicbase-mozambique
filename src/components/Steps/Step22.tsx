import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step22 = () => {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step22.revisePrice')
  const y = getValues('step10.willingPay')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Revising WTP : Monthly Sanitation Tax/Sewer Service Fee" />
      <div>
        <Label number="5.22" required>
          On reflection, would you like to revise the previously stated price
          for the for the monthly sanitation tax or sewer service fee? Remember,
          your proposed price is ({y} MT)
        </Label>

        <div css={tw`flex justify-between`}>
          {['Revise up', 'Stay the same', 'Revise down'].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step22.revisePrice`)} value={option} />
            </label>
          ))}
        </div>

        <FieldErrorMessage name="step22.revisePrice" errors={errors} />
      </div>

      {(revisedPrice === 'Revise up' || revisedPrice === 'Revise down') && (
        <div>
          <Label number="5.23" required>
            Please let us know the new price that you would be willing to pay?
          </Label>
          <Input
            {...register('step22.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step22?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step22.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step22
