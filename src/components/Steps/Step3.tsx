import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'

const Step3 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.7" required>
          Based on information we have collected, we found that households in
          your community typically pays around 620 meticals for the monthly
          water bill including the sanitation tax. How does this compare to the
          amount you typically pay?
        </Label>
        <Controller
          name="step3.compare"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Higher', 'About Right', 'Lower']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select one option"
              error={!!errors?.step3?.compare}
            />
          )}
        />
        <FieldErrorMessage name="step3.compare" errors={errors} />
      </div>
    </div>
  )
}

export default Step3
