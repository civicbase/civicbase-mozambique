import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const bill = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.1" required>
          Please enter unique ID
        </Label>
        <Input
          {...register('step1.unique_id', { required: true })}
          error={!!errors?.step1?.unique_id}
          disabled={true}
        />
        <FieldErrorMessage name="step1.unique_id" errors={errors} />
      </div>

      <div>
        <Label required>Language</Label>
        <Controller
          name="step1.language"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['English', 'Português']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select a language"
              error={!!errors?.step1?.language}
            />
          )}
        />
        <FieldErrorMessage name="step1.language" errors={errors} />
      </div>
    </div>
  )
}

export default bill
