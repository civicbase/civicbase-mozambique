import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'

const Step5 = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  const shareInfo = watch('step5.share_information')
  const shareNumber = watch('step5.share_number')
  const share_0 = watch('step5.share_0')
  const share_1 = watch('step5.share_1')
  const share_2 = watch('step5.share_2')
  const share_3 = watch('step5.share_3')
  const share_4 = watch('step5.share_4')

  console.log('shareInfo', shareInfo)

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          As a customer of SASB, do you think the information is relevant to
          you?
        </Label>
        <Controller
          name="step5.is_information_relevant"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step5?.is_information_relevant}
            />
          )}
        />
        <FieldErrorMessage
          name="step5.is_information_relevant"
          errors={errors}
        />
      </div>

      <div>
        <Label required>
          How would you feel about sharing this information we just gave you
          with a friend or colleague?
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between mb-5`}>
            <Typography>Strongly Disagree</Typography>
            <Typography>Strongly Agree</Typography>
          </div>
          <div css={tw`flex justify-between`}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(option => (
              <label
                css={tw`flex flex-col space-y-2 items-center select-none`}
                key={option}
              >
                <Radio
                  {...register(`step5.share_information`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <FieldErrorMessage name="step5.share_information" errors={errors} />
      </div>

      <div>
        <Label required>
          With whom would you like to share this information to?
        </Label>
        <div css={tw`grid grid-cols-1 gap-6`}>
          <div>
            <Input
              {...register('step5.share_0.name', {
                required: true,
              })}
              error={!!errors?.step5?.share_0?.name}
            />
            <FieldErrorMessage name="step5.share_0.name" errors={errors} />
          </div>

          <Input
            {...register('step5.share_1.name', {
              required: true,
            })}
            error={!!errors?.step5?.share_1?.name}
          />

          <Input
            {...register('step5.share_2.name', {
              required: true,
            })}
            error={!!errors?.step5?.share_2?.name}
          />

          <Input
            {...register('step5.share_3.name', {
              required: true,
            })}
            error={!!errors?.step5?.share_3?.name}
          />

          <Input
            {...register('step5.share_4.name', {
              required: true,
            })}
            error={!!errors?.step5?.share_4?.name}
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
          name="step5.share_number"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step5?.share_information}
            />
          )}
        />
        <FieldErrorMessage name="step5.share_number" errors={errors} />
      </div>

      {shareNumber === 'Yes' && (
        <div>
          <Label required>What are their numbers?</Label>
          <div css={tw`grid grid-cols-1 gap-6`}>
            {share_0.name && (
              <div>
                <Input
                  {...register('step5.share_0.number', {
                    required: true,
                  })}
                  error={!!errors?.step5?.share_0?.number}
                />
                <FieldErrorMessage
                  name="step5.share_0.number"
                  errors={errors}
                />
              </div>
            )}

            {share_1.name && (
              <div>
                <Input
                  {...register('step5.share_1.number', {
                    required: true,
                  })}
                  error={!!errors?.step5?.share_1?.number}
                />
                <FieldErrorMessage
                  name="step5.share_1.number"
                  errors={errors}
                />
              </div>
            )}

            {share_2.name && (
              <div>
                <Input
                  {...register('step5.share_2.number', {
                    required: true,
                  })}
                  error={!!errors?.step5?.share_2?.number}
                />
                <FieldErrorMessage
                  name="step5.share_2.number"
                  errors={errors}
                />
              </div>
            )}

            {share_3.name && (
              <div>
                <Input
                  {...register('step5.share_3.number', {
                    required: true,
                  })}
                  error={!!errors?.step5?.share_3?.number}
                />
                <FieldErrorMessage
                  name="step5.share_3.number"
                  errors={errors}
                />
              </div>
            )}

            {share_4.name && (
              <div>
                <Input
                  {...register('step5.share_4.number', {
                    required: true,
                  })}
                  error={!!errors?.step5?.share_4?.number}
                />
                <FieldErrorMessage
                  name="step5.share_4.number"
                  errors={errors}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Step5
