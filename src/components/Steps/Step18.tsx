import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'

const Step18 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.53" required>
          As previously mentioned at the start of the survey, your responses
          will be confidential. However, today, you have a chance to submit your
          satisfaction directly to SASB through us. This will enable them to
          follow up with you. Would you like to do that?
        </Label>
        <Controller
          name="step18.shareSASBSatisfaction"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step18?.shareSASBSatisfaction}
            />
          )}
        />
        <FieldErrorMessage
          name="step18.shareSASBSatisfaction"
          errors={errors}
        />
      </div>

      <div>
        <Label number="4.54" required>
          Do you know how to contact SASB when you are faced with sanitation or
          drainage related issues?
        </Label>
        <Controller
          name="step18.knowHowContactSASB"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step18?.knowHowContactSASB}
            />
          )}
        />
        <FieldErrorMessage name="step18.knowHowContactSASB" errors={errors} />
      </div>
    </div>
  )
}

export default Step18
