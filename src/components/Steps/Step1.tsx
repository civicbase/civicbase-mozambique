import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const bill = () => {
  const consumptions: string[] = ['a', 'b']
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>Please enter unique ID</Label>
        <Input
          {...register('step1.unique_id', { required: true })}
          error={!!errors?.step1?.unique_id}
        />
        <FieldErrorMessage name="step1.unique_id" errors={errors} />
      </div>
      <div>
        <Label required>Please show us your latest bill</Label>
        <Input
          {...register('step1.bill.description', { required: true })}
          error={!!errors?.step1?.bill?.description}
        />
        <FieldErrorMessage name="step1.bill.description" errors={errors} />
      </div>
      <div>
        <Label required>Month of Bill</Label>
        <Input
          {...register('step1.bill.month', { required: true })}
          error={!!errors?.step1?.bill?.month}
        />
        <FieldErrorMessage name="step1.bill.month" errors={errors} />
      </div>
      <div>
        <Label required>Record Total Consumption</Label>
        <Controller
          name="step1.bill.consumption"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={consumptions}
              value={field.value}
              onChange={field.onChange}
              placeholder="Record Total Consumption"
              error={!!errors?.step1?.bill?.consumption}
            />
          )}
        />
        <FieldErrorMessage name="step1.bill.consumption" errors={errors} />
      </div>
      <div>
        <Label required>Record Total Cost Incurred</Label>
        <Input
          {...register('step1.bill.cost', { required: true })}
          error={!!errors?.step1?.bill?.cost}
        />
        <FieldErrorMessage name="step1.bill.cost" errors={errors} />
      </div>
      <div>
        <Label required>Record Sanitation Tax Cost</Label>
        <Input
          {...register('step1.bill.sanitation_tax_cost', { required: true })}
          error={!!errors?.step1?.bill?.sanitation_tax_cost}
        />
        <FieldErrorMessage
          name="step1.bill.sanitation_tax_cost"
          errors={errors}
        />
      </div>
    </div>
  )
}

export default bill
