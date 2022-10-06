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
    watch,
  } = useFormContext()

  const shareBill = watch('step2.waterBill.share')
  const dwellingType = watch('step2.dwellingType')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.3" required>
          What type of sanitation service do you have?
        </Label>
        <Controller
          name="step2.sanitationType"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Flush to Sewer', 'Flush to Septic Tank']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select a sanitatition service"
              error={!!errors?.step2?.sanitationType}
            />
          )}
        />
        <FieldErrorMessage name="step2.sanitationType" errors={errors} />
      </div>

      <div>
        <Label number="4.4" required>
          What type of dweling is this?
        </Label>
        <Controller
          name="step2.dwellingType"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[
                'Singular',
                'Compound / Collective',
                'Multistoried buildings',
              ]}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select a dwelling type"
              error={!!errors?.step2?.dwellingType}
            />
          )}
        />
        <FieldErrorMessage name="step2.dwellingType" errors={errors} />
      </div>

      {dwellingType === 'Compound / Collective' && (
        <>
          <div>
            <Label number="4.5" required>
              Do you share your water bill with other households?
            </Label>
            <Controller
              name="step2.waterBill.share"
              control={control}
              render={({ field }) => (
                <Dropdown
                  options={['Yes', 'No']}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Please select one option"
                  error={!!errors?.step2?.waterBill?.share}
                />
              )}
            />
            <FieldErrorMessage name="step2.waterBill.share" errors={errors} />
          </div>

          {shareBill === 'Yes' && (
            <>
              <div>
                <Label number="4.6" required>
                  With how many households do you share your water bill?
                </Label>
                <Input
                  {...register('step2.waterBill.shareNumber', {
                    required: true,
                    valueAsNumber: true,
                  })}
                  error={!!errors?.step2?.waterBill?.shareNumber}
                  type="number"
                />
                <FieldErrorMessage
                  name="step2.waterBill.shareNumber"
                  errors={errors}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Step2
