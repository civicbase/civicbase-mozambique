import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step25 = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  const revisedPrice = watch('step25.revise_stated_price')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        I will now ask you about your experiences with rainwater drainage around
        your block. For each experience, we want to know in how many months this
        happened to you during the last 12 months. Even if it happened just once
        during a month, we would like to count that month
      </Typography>

      <div>
        <Label required>
          In the last 12 months, in how many months did the drainage box in your
          nighborhood block got obstructed and overflowed?
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
            <Radio {...register(`step26.drainage_box_block`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.drainage_box_block" errors={errors} />
      </div>

      <div>
        <Label required>
          In the last 12 months, how many months did you see that a drainage
          ditch/manhole was left open in your neighborhood block?
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
            <Radio {...register(`step26.drainage_ditch_open`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.drainage_ditch_open" errors={errors} />
      </div>

      <div>
        <Label required>
          In the last 12 months, how many months have you had to walk through
          water?
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
            <Radio {...register(`step26.walked_water`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.walked_water" errors={errors} />
      </div>

      <div>
        <Label required>
          In the last 12 months, how many months did you get soaked “take a
          shower” because of passing cars?
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
            <Radio {...register(`step26.passing_car_soaked`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.passing_car_soaked" errors={errors} />
      </div>

      <div>
        <Label required>
          In the last 12 months, in how many months were you embarrassed because
          your clothes got dirty with water on the street?
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
            <Radio {...register(`step26.dirty_clothes`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.dirty_clothes" errors={errors} />
      </div>

      <div>
        <Label required>
          In the last 12 months, in how many months were you afraid of catching
          a disease because of stagnant water on the street?
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
            <Radio {...register(`step26.stagnant_water`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.stagnant_water" errors={errors} />
      </div>

      <div>
        <Label required>
          In the last 12 months, in how many months did your neighborhood
          experience flood after a rain?
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
            <Radio {...register(`step26.flood_after_rain`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step26.flood_after_rain" errors={errors} />
      </div>

      <div>
        <Label required>
          Do you know which entity is responsible for managing the drainage
          system?
        </Label>
        <Controller
          name="step26.know_responsible_entity"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step26?.know_responsible_entity}
            />
          )}
        />
        <FieldErrorMessage
          name="step26.know_responsible_entity"
          errors={errors}
        />
      </div>

      <div>
        <Label required>Which entity is responsible?</Label>

        <div css={tw`flex flex-col space-y-4 mt-4`}>
          {[
            'National government',
            'Provincial government',
            'Municipal Council',
            'SASB',
            'Neighborhood government',
            'The residentes',
            'Other',
          ].map(option => (
            <label
              css={tw`inline-flex space-x-4 items-center select-none`}
              key={option}
            >
              <Checkbox
                {...register(`step12.service_provider.contacted_who.${option}`)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Step25
