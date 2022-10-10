import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step24 = () => {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step24.revisePrice')
  const y = getValues('step14.fsm.greatValue')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Revising WTP: Fecal Sludge Desludging Services" />

      <div>
        <Label number="5.30" required>
          On reflection, would you like to revise the previously stated price
          for the service ? Remember, your proposed price is ({y} MT)
        </Label>

        <div css={tw`flex justify-between`}>
          {['Revise up', 'Stay the same', 'Revise down'].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio {...register(`step24.revisePrice`)} value={option} />
            </label>
          ))}
        </div>
      </div>

      {(revisedPrice === 'Revise up' || revisedPrice === 'Revise down') && (
        <div>
          <Label number="5.31" required>
            Please let us know the new price that you would be willing to pay?
          </Label>
          <Input
            {...register('step24.willingPay', {
              required: true,
              valueAsNumber: true,
            })}
            error={!!errors?.step24?.willingPay}
            type="number"
          />

          <FieldErrorMessage name="step24.willingPay" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step24
