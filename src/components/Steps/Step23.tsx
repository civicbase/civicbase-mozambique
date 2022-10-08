import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step23 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Experience Interacting with SASB when dealing with Septic Tank" />

      <div>
        <Label number="5.24" required>
          Did the person who dealt with your complaint treat you in a fair and
          polite manner?
        </Label>
        <Controller
          name="step23.treatFairPolite"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step23?.treatFairPolite}
            />
          )}
        />
        <FieldErrorMessage name="step23.treatFairPolite" errors={errors} />
      </div>

      <div>
        <Label number="5.25" required>
          Did you need to make more than one call before they entered into
          action?
        </Label>
        <Controller
          name="step23.moreThanOneCall"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step23?.moreThanOneCall}
            />
          )}
        />
        <FieldErrorMessage name="step23.moreThanOneCall" errors={errors} />
      </div>

      <div>
        <Label number="5.26" required>
          Did you feel that you needed to pay some sort of bribe or gift to the
          employee to make the request to be processed faster?
        </Label>
        <Controller
          name="step23.bribe"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step23?.bribe}
            />
          )}
        />
        <FieldErrorMessage name="step23.bribe" errors={errors} />
      </div>

      <div>
        <Label number="5.27" required>
          Has your matter been dealt with by the SASB itself or have you been
          referred to another entity?
        </Label>
        <Controller
          name="step23.dealthWith"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Referred to another entity', 'Dealth by SASB']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step23?.dealthWith}
            />
          )}
        />
        <FieldErrorMessage name="step23.dealthWith" errors={errors} />
      </div>

      <div>
        <Label number="5.28" required>
          Has the problem been resolved?
        </Label>
        <Controller
          name="step23.problemResolved"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step23?.problemResolved}
            />
          )}
        />
        <FieldErrorMessage name="step23.problemResolved" errors={errors} />
      </div>

      <div>
        <Label number="5.29" required>
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
            <Radio {...register(`step23.howLong`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step23.howLong" errors={errors} />
      </div>
    </div>
  )
}

export default Step23
