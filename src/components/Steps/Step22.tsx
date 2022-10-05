import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step22 = () => {
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
          Contacted someone to resolve the issues you faced before?
        </Label>
        <Controller
          name="step22.contacted_someone"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step22?.contacted_someone}
            />
          )}
        />
        <FieldErrorMessage name="step22.contacted_someone" errors={errors} />
      </div>

      <div>
        <Label required>When was the last time you contacted someone?</Label>

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
              {...register(`step22.service_provider.last_time`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step22.service_provider.last_time"
          errors={errors}
        />
      </div>

      <div>
        <Label required>What was the problem about?</Label>

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
              <Checkbox
                {...register(`step22.service_provider.problem.${index}`)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
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
                {...register(`step22.service_provider.contacted_who.${option}`)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>Why didn't you contact SASB for the problem? </Label>

        <div css={tw`flex flex-col space-y-4 mt-4`}>
          {[
            'Don’t know how to contact',
            'SASB usually take so long',
            'SASB will not solve that problem for me',
            'Do not trust SASB',
            'Someone else will call',
            'More convenient to call a plumber to fix my problem',
            'Cheaper to call a plumber',
          ].map(option => (
            <label
              css={tw`inline-flex space-x-4 items-center select-none`}
              key={option}
            >
              <Checkbox
                {...register(
                  `step22.service_provider.why_didnt_contacted.${option}`,
                )}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>
          Do you know how to contact SASB when you have a problem with your
          sewer connection?
        </Label>
        <Controller
          name="step22.know_how_contact_SASB"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step22?.know_how_contact_SASB}
            />
          )}
        />
        <FieldErrorMessage
          name="step22.know_how_contact_SASB"
          errors={errors}
        />
      </div>

      <div>
        <Label required>
          If it is the SASB, did the person who dealt with your complaint treat
          you in a fair and polite manner?
        </Label>
        <Controller
          name="step22.SASB_fair_polite"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step22?.SASB_fair_polite}
            />
          )}
        />
        <FieldErrorMessage name="step22.SASB_fair_polite" errors={errors} />
      </div>

      <div>
        <Label required>
          If you have contacted the SASB, has your matter been dealt with by the
          SASB itself or have you been referred to another entity?
        </Label>
        <Controller
          name="step22.dealt_SASB"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step22?.dealt_SASB}
            />
          )}
        />
        <FieldErrorMessage name="step22.dealt_SASB" errors={errors} />
      </div>

      <div>
        <Label required>
          If it was SASB, did you have to make more than one call before they
          entered into action?
        </Label>
        <Controller
          name="step22.more_than_one_call"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step22?.more_than_one_call}
            />
          )}
        />
        <FieldErrorMessage name="step22.more_than_one_call" errors={errors} />
      </div>

      <div>
        <Label required>
          If it is the SASB, did you feel that you needed to pay some sort of
          bribe or gift to the employee to make the request to be processed
          faster?
        </Label>
        <Controller
          name="step22.bribed"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step22?.bribed}
            />
          )}
        />
        <FieldErrorMessage name="step22.bribed" errors={errors} />
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
            <Radio {...register(`step22.how_long`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step22.how_long" errors={errors} />
      </div>
    </div>
  )
}

export default Step22
