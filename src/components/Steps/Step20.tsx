import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step20 = () => {
  const {
    register,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const connection = getValues('step2.sanitationType')
  const contacted = getValues('step13.serviceProvider.contacted')
  const contactecSASB = getValues(`step13.serviceProvider.who.SASB`)
  const contactedOther = watch('step20.contactedWho.Other')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Experience Interacting with SASB when dealing with Sewer ISSUES" />

      {connection === 'Flush to Sewer' && (
        <div>
          <Label number="5.8" required>
            Since April 2021, Have you ever contacted anyone to resolve your
            sewer issues before?
          </Label>
          <Controller
            name="step20.contacted"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.contacted}
              />
            )}
          />
          <FieldErrorMessage name="step20.contacted" errors={errors} />
        </div>
      )}

      {contacted === 'Yes' && (
        <div>
          <Label number="5.9" required>
            When was the last time you contacted someone for help with a sewer
            problem?
          </Label>

          <div css={tw`flex space-x-2`}>
            <Controller
              name="step20.contactedMonth"
              control={control}
              render={({ field }) => (
                <div css={tw`flex-1 flex flex-col`}>
                  <Dropdown
                    options={[
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Month"
                    error={!!errors?.step20?.contactedMonth}
                  />

                  <FieldErrorMessage
                    name="step20.contactedMonth"
                    errors={errors}
                  />
                </div>
              )}
            />
            <Controller
              name="step20.contactedYear"
              control={control}
              render={({ field }) => (
                <div css={tw`flex-1 flex flex-col`}>
                  <Dropdown
                    options={['2022', '2021']}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Year"
                    error={!!errors?.step20?.contactedYear}
                  />

                  <FieldErrorMessage
                    name="step20.contactedYear"
                    errors={errors}
                  />
                </div>
              )}
            />
          </div>
        </div>
      )}

      {contacted === 'Yes' && (
        <div>
          <Label number="5.10" required>
            What was the problem about?
          </Label>
          <Controller
            name="step20.problem"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[
                  'Not enough water to flush',
                  'Sewer blockage, no proper flow, flow of black water, over flow in your dwelling or compound',
                  'Sewer blockage, no proper flow, flow of black water, over flow in your block',
                  'Sewer line leakage/breakage in your dwelling',
                  'Sewer line leakage/breakage in your neighborhood',
                  'Bad sewer smell in your dwelling',
                  'Connection cutoff due to not paying bill',
                  'Other',
                ]}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.problem}
              />
            )}
          />
          <FieldErrorMessage name="step20.problem" errors={errors} />
        </div>
      )}

      {connection === 'Flush to Sewer' && (
        <div>
          <Label number="5.11" required>
            Who did you contact?
          </Label>
          <div css={tw`flex flex-col space-y-4 mt-4`}>
            {['Landlord', 'Plumber', 'SASB', 'Building Manager', 'Other'].map(
              option => (
                <label
                  css={tw`inline-flex space-x-4 items-center select-none`}
                  key={option}
                >
                  <Checkbox {...register(`step20.contactedWho.${option}`)} />
                  <span>{option}</span>
                </label>
              ),
            )}
          </div>

          <FieldErrorMessage name="step20.contactedWho" errors={errors} />
        </div>
      )}

      {contactedOther && (
        <div>
          <Label number="5.12" required>
            Specify other
          </Label>
          <Input
            {...register('step20.contactedOther', { required: true })}
            error={!!errors?.step20?.contactedOther}
          />
          <FieldErrorMessage name="step20.contactedOther" errors={errors} />
        </div>
      )}

      {!contactecSASB && (
        <div>
          <Label number="5.13" required>
            Why didn't you contact SASB for the problem?{' '}
          </Label>

          <div css={tw`flex flex-col space-y-4 mt-4`}>
            {[
              `Don't know how to contact`,
              'SASB usually take so long',
              'SASB will not solve that problem for me',
              'Do not trust SASB',
              'Someone else will call',
              'More convenient to call a plumber to fix my problem',
              'Cheaper to call a plumber',
            ].map((option, index) => (
              <label
                css={tw`inline-flex space-x-4 items-center select-none`}
                key={option}
              >
                <Checkbox {...register(`step20.whyDidntContacted.${index}`)} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {contactecSASB && (
        <div>
          <Label number="5.14" required>
            Did the person who dealt with your complaint treat you in a fair and
            polite manner?
          </Label>
          <Controller
            name="step20.treatFairPolite"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.treatFairPolite}
              />
            )}
          />
          <FieldErrorMessage name="step20.treatFairPolite" errors={errors} />
        </div>
      )}

      {contactecSASB && (
        <div>
          <Label number="5.15" required>
            Did you need to make more than one call before they entered into
            action?
          </Label>
          <Controller
            name="step20.moreThanOneCall"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.moreThanOneCall}
              />
            )}
          />
          <FieldErrorMessage name="step20.moreThanOneCall" errors={errors} />
        </div>
      )}

      {contactecSASB && (
        <div>
          <Label number="5.16" required>
            Did you feel that you needed to pay some sort of bribe or gift to
            the employee to make the request to be processed faster?
          </Label>
          <Controller
            name="step20.bribe"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.bribe}
              />
            )}
          />
          <FieldErrorMessage name="step20.bribe" errors={errors} />
        </div>
      )}

      {contactecSASB && (
        <div>
          <Label number="5.17" required>
            Has your matter been dealt with by the SASB itself or have you been
            referred to another entity?
          </Label>
          <Controller
            name="step20.anotherEntity"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Referred to another entity', 'Dealth by SASB']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.anotherEntity}
              />
            )}
          />
          <FieldErrorMessage name="step20.anotherEntity" errors={errors} />
        </div>
      )}

      {contactecSASB && (
        <div>
          <Label number="5.18" required>
            Has the problem been resolved?
          </Label>
          <Controller
            name="step20.problemResolved"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.problemResolved}
              />
            )}
          />
          <FieldErrorMessage name="step20.problemResolved" errors={errors} />
        </div>
      )}

      {contactecSASB && (
        <div>
          <Label number="5.19" required>
            How long did the resolution take since you have put in the request?
          </Label>
          <Controller
            name="step20.howLong"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[
                  'A few days but within a week',
                  'Between 1 and 2 weeks',
                  'Less than a month',
                  'More than a month',
                ]}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step20?.howLong}
              />
            )}
          />
          <FieldErrorMessage name="step20.howLong" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step20
