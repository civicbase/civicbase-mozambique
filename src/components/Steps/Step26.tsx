import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step26 = () => {
  const {
    register,
    control,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext()

  const contacted = getValues('step26.serviceProvider.contacted')
  const otherProblem = watch('step26.contacted.problem') === 'Other'
  const contactedSASB = getValues('step13.serviceProvider.who.SASB')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Experience Interacting with SASB when dealing with Drainage Issues" />

      <div>
        <Label number="6.12" required>
          Since April 2021, have you contacted someone to resolve the DRAINAGE
          issues you faced before?
        </Label>
        <Controller
          name="step26.contactedDrainageIssue"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step26?.contactedDrainageIssue}
            />
          )}
        />
        <FieldErrorMessage
          name="step26.contactedDrainageIssue"
          errors={errors}
        />
      </div>

      {contacted === 'Yes' && (
        <>
          <div>
            <Label number="6.13" required>
              When was the last time you contacted someone for help with a
              drainage problem?
            </Label>

            <div css={tw`flex space-x-2`}>
              <Controller
                name="step26.contacted.month"
                control={control}
                render={({ field }) => (
                  <div css={tw`flex-1`}>
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
                      error={!!errors?.step26?.contacted?.month}
                    />
                  </div>
                )}
              />
              <Controller
                name="step26.contacted.year"
                control={control}
                render={({ field }) => (
                  <div css={tw`flex-1`}>
                    <Dropdown
                      options={[
                        '2010',
                        '2011',
                        '2012',
                        '2013',
                        '2014',
                        '2015',
                        '2016',
                        '2017',
                        '2018',
                        '2019',
                        '2020',
                        '2021',
                        '2022',
                      ]}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Year"
                      error={!!errors?.step26?.contacted?.year}
                    />
                  </div>
                )}
              />
            </div>

            <FieldErrorMessage name="step26.contacted.month" errors={errors} />

            <FieldErrorMessage name="step26.contacted.year" errors={errors} />
          </div>
        </>
      )}

      {contacted === 'Yes' && (
        <div>
          <Label number="6.14" required>
            What was the problem about?
          </Label>
          <Controller
            name="step26.contacted.problem"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[
                  'Channels and boxes open',
                  'Overflowing boxes',
                  'Flooded roads',
                  'Flooded courtyard after rain',
                  'House flooded after rain',
                  'Other',
                ]}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.contacted?.problem}
              />
            )}
          />
          <FieldErrorMessage name="step26.contacted.problem" errors={errors} />
        </div>
      )}

      {otherProblem && (
        <div>
          <Label number="6.15" required>
            Specify other
          </Label>
          <Input
            {...register('step26.contacted.other', { required: true })}
            error={!!errors?.step26?.contacted?.other}
          />
          <FieldErrorMessage name="step26.contacted.other" errors={errors} />
        </div>
      )}

      {contacted === 'Yes' && (
        <div>
          <Label number="6.16" required>
            Who did you contact?
          </Label>

          <div css={tw`flex flex-col space-y-4 mt-4`}>
            {['Landlord', 'Plumber', 'SASB', 'Other'].map(option => (
              <label
                css={tw`inline-flex space-x-4 items-center select-none`}
                key={option}
              >
                <Checkbox {...register(`step26.contacted.who.${option}`)} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {!contactedSASB && (
        <div>
          <Label number="6.17" required>
            Why didn't you contact SASB for the problem?
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
                <Checkbox
                  {...register(`step26.SASBNotContactedReasons.${index}`)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {contactedSASB && (
        <div>
          <Label number="6.18" required>
            Did the person who dealt with your complaint treat you in a fair and
            polite manner?
          </Label>
          <Controller
            name="step26.treatFairPolite"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.treatFairPolite}
              />
            )}
          />
          <FieldErrorMessage name="step26.treatFairPolite" errors={errors} />
        </div>
      )}

      {contactedSASB && (
        <div>
          <Label number="6.19" required>
            Did you need to make more than one call before they entered into
            action?
          </Label>
          <Controller
            name="step26.moreThanOneCall"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.moreThanOneCall}
              />
            )}
          />
          <FieldErrorMessage name="step26.moreThanOneCall" errors={errors} />
        </div>
      )}

      {contactedSASB && (
        <div>
          <Label number="6.20" required>
            Did you feel that you needed to pay some sort of bribe or gift to
            the employee to make the request to be processed faster?
          </Label>
          <Controller
            name="step26.bribe"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.bribe}
              />
            )}
          />
          <FieldErrorMessage name="step26.bribe" errors={errors} />
        </div>
      )}

      {contactedSASB && (
        <div>
          <Label number="6.21" required>
            Has your matter been dealt with by the SASB itself or have you been
            referred to another entity?
          </Label>
          <Controller
            name="step26.anotherEntity"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.anotherEntity}
              />
            )}
          />
          <FieldErrorMessage name="step26.anotherEntity" errors={errors} />
        </div>
      )}

      {contactedSASB && (
        <div>
          <Label number="6.22" required>
            Has the problem been resolved?
          </Label>
          <Controller
            name="step26.problemResolved"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={['Yes', 'No']}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.problemResolved}
              />
            )}
          />
          <FieldErrorMessage name="step26.problemResolved" errors={errors} />
        </div>
      )}

      {contactedSASB && (
        <div>
          <Label number="6.23" required>
            How long did the resolution take since you have put in the request?
          </Label>
          <Controller
            name="step26.howLong"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[
                  ' A few days but within a week',
                  'Between 1 and 2 weeks',
                  'Less than a month',
                  'More than a month',
                ]}
                value={field.value}
                onChange={field.onChange}
                placeholder="Please select an option"
                error={!!errors?.step26?.howLong}
              />
            )}
          />
          <FieldErrorMessage name="step26.howLong" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step26
