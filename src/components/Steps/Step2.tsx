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
    watch,
  } = useFormContext()

  console.log('errors', errors)

  const shareBill = watch('step2.water_bill.share')
  const customSharedBill = watch('step2.water_bill.split')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>Type of dwelling</Label>
        <Controller
          name="step2.dwelling_type"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['a', 'b']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select a dwelling type"
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
              options={['Flush to Sewer', 'Flush to Septic Tank']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select a sanitatition service"
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
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select one option"
              error={!!errors?.step2?.water_bill?.share}
            />
          )}
        />
        <FieldErrorMessage name="step2.water_bill.share" errors={errors} />
      </div>

      {shareBill === 'Yes' && (
        <>
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
              type="number"
            />
            <FieldErrorMessage
              name="step2.water_bill.share_number"
              errors={errors}
            />
          </div>

          <div>
            <Label required>
              How do you split the bills among the households ?
            </Label>
            <Controller
              name="step2.water_bill.split"
              control={control}
              render={({ field }) => (
                <Dropdown
                  options={['Equally', 'Custom']}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Please select one option"
                  error={!!errors?.step2?.water_bill?.split}
                />
              )}
            />
            <FieldErrorMessage name="step2.water_bill.split" errors={errors} />
          </div>

          {customSharedBill === 'Custom' && (
            <div>
              <Label required>
                If not EQUALLY, How much did you pay for the bill?
              </Label>
              <Input
                {...register('step2.water_bill.split_pay', {
                  required: true,
                  valueAsNumber: true,
                })}
                error={!!errors?.step2?.water_bill?.split_pay}
                type="number"
              />
              <FieldErrorMessage
                name="step2.water_bill.split_pay"
                errors={errors}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Step2
