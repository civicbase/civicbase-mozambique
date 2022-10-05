import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step24 = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          When was the last time you contacted someone to empty the cesspool?
        </Label>

        {[
          'Before February 2022',
          'Between February and April 2022',
          'After April 2022',
        ].map(option => (
          <label
            css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
            key={option}
          >
            <Radio
              {...register(`step24.service_provider.last_time`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step24.service_provider.last_time"
          errors={errors}
        />
      </div>

      <div>
        <Label required>Who did you contact? </Label>

        <div css={tw`flex flex-col space-y-4 mt-4`}>
          {['Dono da casa', 'Um canalizador', 'SASB', 'Outro'].map(option => (
            <label
              css={tw`inline-flex space-x-4 items-center select-none`}
              key={option}
            >
              <Checkbox
                {...register(`step24.service_provider.contacted_who.${option}`)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>
          If it is the SASB, did the person who dealt with your complaint treat
          you in a fair and polite manner?
        </Label>
        <Controller
          name="step24.SASB_fair_polite"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step24?.SASB_fair_polite}
            />
          )}
        />
        <FieldErrorMessage name="step24.SASB_fair_polite" errors={errors} />
      </div>

      <div>
        <Label required>
          If you have contacted the SASB, has your matter been dealt with by the
          SASB itself or have you been referred to another entity?
        </Label>
        <Controller
          name="step24.dealt_SASB"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step24?.dealt_SASB}
            />
          )}
        />
        <FieldErrorMessage name="step24.dealt_SASB" errors={errors} />
      </div>

      <div>
        <Label required>
          If it is the SASB, did you feel that you needed to pay some sort of
          bribe or gift to the employee to make the request to be processed
          faster?
        </Label>
        <Controller
          name="step24.bribed"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step24?.bribed}
            />
          )}
        />
        <FieldErrorMessage name="step24.bribed" errors={errors} />
      </div>

      <div>
        <Label required>Has the problem been resolved?</Label>
        <Controller
          name="step24.problem_solved"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step24?.problem_solved}
            />
          )}
        />
        <FieldErrorMessage name="step24.problem_solved" errors={errors} />
      </div>

      <div>
        <Label required>
          How long did the resolution take since you have put in the request?
        </Label>

        {[
          'A few days but within a week',
          'Between 1 and 2 weeks',
          'Less than a month',
          'More than a month',
        ].map(option => (
          <label
            css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
            key={option}
          >
            <Radio {...register(`step24.how_long`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step24.how_long" errors={errors} />
      </div>
    </div>
  )
}

export default Step24
