import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'

const Step2 = () => {
  const {
    control,
    formState: { errors },
    register,
    setValue,
  } = useFormContext()

  const dwellingTypes = ['a', 'b']
  const sanitationTypes = ['a', 'b']
  const shareWaterBill = ['a', 'b']

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>Type of dwelling</Label>
        <Controller
          name="step2.dwelling_type"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={dwellingTypes}
              value={field.value}
              onChange={field.onChange}
              placeholder="Record Total Consumption"
              error={!!errors?.step2?.dwelling_type}
            />
          )}
        />
        <FieldErrorMessage name="step2.dwelling_type" errors={errors} />
      </div>

      <div>
        <Label required>What type of sanitation service do you have?</Label>
        <Controller
          name="step2.sanitation_type"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={sanitationTypes}
              value={field.value}
              onChange={field.onChange}
              placeholder="Record Total Consumption"
              error={!!errors?.step2?.sanitation_type}
            />
          )}
        />
        <FieldErrorMessage name="step2.sanitation_type" errors={errors} />
      </div>

      <div>
        <Label required>
          Do you share your water bill with other households?
        </Label>
        <Controller
          name="step2.water_bill.share"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={shareWaterBill}
              value={field.value}
              onChange={field.onChange}
              placeholder="Record Total Consumption"
              error={!!errors?.step2?.water_bill?.share}
            />
          )}
        />
        <FieldErrorMessage name="step2.water_bill.share" errors={errors} />
      </div>

      <div>
        <Label required>
          With how many households do you share your water bill?
        </Label>
        <Input
          {...register('step2.water_bill.share_number', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors?.step2?.water_bill?.share_number}
        />
        <FieldErrorMessage
          name="step2.water_bill.share_number"
          errors={errors}
        />
      </div>
    </div>
  )
}

export default Step2
