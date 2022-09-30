import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step6 = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          As a customer of SASB, do you think the information is relevant to
          you?
        </Label>
        <Controller
          name="step6.is_information_relevant"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['yes', 'no']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step6?.is_information_relevant}
            />
          )}
        />
        <FieldErrorMessage
          name="step6.is_information_relevant"
          errors={errors}
        />
      </div>

      <div>
        <Label required>
          How would you feel about sharing this information we just gave you
          with a friend or colleague?
        </Label>
        <Controller
          name="step6.share_information"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['a', 'b']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step6?.share_information}
            />
          )}
        />
        <FieldErrorMessage name="step6.share_information" errors={errors} />
      </div>

      <div>
        <Label required>
          With whom would you like to share this information to?
        </Label>
        <div css={tw`grid grid-cols-1 gap-6`}>
          <div>
            <Input
              {...register('step6.share_information_1', {
                required: true,
              })}
              error={!!errors?.step6?.share_information_1}
            />
            <FieldErrorMessage
              name="step6.share_information_1"
              errors={errors}
            />
          </div>

          <Input
            {...register('step6.share_information_2', {
              required: true,
            })}
            error={!!errors?.step6?.share_information_2}
          />

          <Input
            {...register('step6.share_information_3', {
              required: true,
            })}
            error={!!errors?.step6?.share_information_3}
          />

          <Input
            {...register('step6.share_information_4', {
              required: true,
            })}
            error={!!errors?.step6?.share_information_4}
          />

          <Input
            {...register('step6.share_information_5', {
              required: true,
            })}
            error={!!errors?.step6?.share_information_5}
          />
        </div>
      </div>

      <div>
        <Label required>
          Would you be willing to provide a phone number for any of these
          individuals to also contact them about their satisfaction with the
          service?
        </Label>
        <Controller
          name="step6.share_number"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['yes', 'no']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step6?.share_information}
            />
          )}
        />
        <FieldErrorMessage name="step6.share_number" errors={errors} />
      </div>

      <div>
        <Label required>What are their numbers?</Label>
        <div css={tw`grid grid-cols-1 gap-6`}>
          <div>
            <Input
              {...register('step6.share_information_1', {
                required: true,
              })}
              error={!!errors?.step6?.share_information_1}
            />
            <FieldErrorMessage
              name="step6.share_information_1"
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step6
