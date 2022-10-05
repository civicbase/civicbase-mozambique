import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step20 = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const connected = watch('step20.issues.sewer_connection')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>Do you face issues with your sewer connections?</Label>
        <Controller
          name="step20.issues.sewer_connection"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step20?.issues?.sewer_connection}
            />
          )}
        />
        <FieldErrorMessage
          name="step20.issues.sewer_connection"
          errors={errors}
        />
      </div>

      {connected === 'Yes' && (
        <>
          <div>
            <Label required>
              What are the kinds of issues you have faced with your sewer
              connections in the last 12 months?
            </Label>

            <div css={tw`flex flex-col space-y-4 mt-4`}>
              {[
                'Not enough water to flush',
                'Sewer blockage, no proper flow, flow of black water, over flow in your dwelling or compound',
                'Sewer blockage, no proper flow, flow of black water, over flow in your neighborhood',
                'Sewer line leakage/breakage in your dwelling',
                'Sewer line leakage/breakage in your neighborhood',
                'Bad sewer smell in your dwelling',
                'Connection cutoff due to not paying bill',
                'Other',
              ].map((option, index) => (
                <label
                  css={tw`inline-flex space-x-4 items-center select-none`}
                  key={option}
                >
                  <Checkbox {...register(`step20.issues.kind.${index}`)} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <Typography>
            I will now ask you about your experiences with your household’s
            sewer connection . For each experience, we want to know in how many
            months this happened to you during the last 12 months. Even if it
            happened just once during a month, we would like to count that month
          </Typography>

          <div>
            <Label required>
              How often did you experience interruptions because there is a
              sewer blockage causing return and overflow in your dwelling or
              compound?
            </Label>

            {[
              'Yes, during 1 or 2 months',
              'Yes, during 3 or more months but not all',
              'Yes, all months',
              'No, never',
            ].map(option => (
              <label
                css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
                key={option}
              >
                <Radio
                  {...register(`step20.interruptions.how_often`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}

            <FieldErrorMessage
              name="step20.interruptions.how_often"
              errors={errors}
            />
          </div>

          <div>
            <Label required>
              How often did you experience sewer line leakage or breakage in
              your neighborhood block?
            </Label>

            {[
              'Yes, during 1 or 2 months',
              'Yes, during 3 or more months but not all',
              'Yes, all months',
              'No, never',
            ].map(option => (
              <label
                css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
                key={option}
              >
                <Radio
                  {...register(`step20.sewer_line_leakage.how_often`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}

            <FieldErrorMessage
              name="step20.sewer_line_leakage.how_often"
              errors={errors}
            />
          </div>

          <div>
            <Label required>
              How often did you experience bad sewer smell in your dwelling?
            </Label>

            {[
              'Yes, during 1 or 2 months',
              'Yes, during 3 or more months but not all',
              'Yes, all months',
              'No, never',
            ].map(option => (
              <label
                css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
                key={option}
              >
                <Radio
                  {...register(`step20.bad_smell.how_often`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}

            <FieldErrorMessage
              name="step20.bad_smell.how_often"
              errors={errors}
            />
          </div>

          <div>
            <Label required>
              What, in your view, are the causes of sewer problems (max 3)
            </Label>
          </div>
        </>
      )}
    </div>
  )
}

export default Step20
