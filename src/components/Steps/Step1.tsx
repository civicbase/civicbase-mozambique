import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Checkbox from 'components/Form/Checkbox'

const bill = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const sharedBill = watch('step1.bill.shared')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>Please enter unique ID</Label>
        <Input
          {...register('step1.unique_id', { required: true })}
          error={!!errors?.step1?.unique_id}
          disabled={true}
        />
        <FieldErrorMessage name="step1.unique_id" errors={errors} />
      </div>
      <div>
        <label css={tw`inline-flex space-x-4 items-center select-none`}>
          <Checkbox {...register(`step1.bill.shared`)} />
          <span>Provided latest bill?</span>
        </label>
      </div>
      {sharedBill && (
        <>
          <div>
            <Label required>Month of Bill</Label>
            <Controller
              name="step1.bill.month"
              control={control}
              render={({ field }) => (
                <Dropdown
                  options={[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Please select a month"
                  error={!!errors?.step1?.bill?.month}
                />
              )}
            />
            <FieldErrorMessage name="step1.bill.month" errors={errors} />
          </div>
          <div>
            <Label required>Record Total Consumption (in cubic meters)</Label>
            <Input
              {...register('step1.bill.consumption', {
                required: true,
                valueAsNumber: true,
              })}
              error={!!errors?.step1?.bill?.consumption}
              type="number"
            />

            <FieldErrorMessage name="step1.bill.consumption" errors={errors} />
          </div>
          <div>
            <Label required>Record Total Cost Incurred (meticais)</Label>
            <Input
              {...register('step1.bill.cost', {
                required: true,
                valueAsNumber: true,
              })}
              error={!!errors?.step1?.bill?.cost}
              type="number"
            />
            <FieldErrorMessage name="step1.bill.cost" errors={errors} />
          </div>
          <div>
            <Label required>Record Sanitation Tax Cost (meticais)</Label>
            <Input
              {...register('step1.bill.sanitation_tax_cost', {
                required: true,
                valueAsNumber: true,
              })}
              error={!!errors?.step1?.bill?.sanitation_tax_cost}
              type="number"
            />
            <FieldErrorMessage
              name="step1.bill.sanitation_tax_cost"
              errors={errors}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default bill
