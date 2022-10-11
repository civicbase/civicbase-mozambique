import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step26 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    control,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext()

  const contacted = getValues('step13.serviceProvider.contacted')
  const otherProblem = watch('step26.contacted.problem') === 'Other'
  const contactedSASB = getValues('step13.serviceProvider.who.SASB')
  const contactedDrainageIssue = watch('step26.contactedDrainageIssue')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[26]()} />

      <div>
        <Label number="6.12" required>
          {LL.questions[612]()}
        </Label>
        <Controller
          name="step26.contactedDrainageIssue"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step26?.contactedDrainageIssue}
            />
          )}
        />
        <FieldErrorMessage
          name="step26.contactedDrainageIssue"
          errors={errors}
        />
      </div>

      {contactedDrainageIssue === LL.choices.yesNo[0]() && (
        <>
          {contacted === LL.choices.yesNo[0]() && (
            <>
              <div>
                <Label number="6.13" required>
                  {LL.questions[613]()}
                </Label>

                <div css={tw`flex space-x-2`}>
                  <Controller
                    name="step26.contacted.month"
                    control={control}
                    render={({ field }) => (
                      <div css={tw`flex-1`}>
                        <Dropdown
                          options={[
                            LL.choices.months[0](),
                            LL.choices.months[1](),
                            LL.choices.months[2](),
                            LL.choices.months[3](),
                            LL.choices.months[4](),
                            LL.choices.months[5](),
                            LL.choices.months[6](),
                            LL.choices.months[7](),
                            LL.choices.months[8](),
                            LL.choices.months[9](),
                            LL.choices.months[10](),
                            LL.choices.months[11](),
                          ]}
                          value={field.value}
                          onChange={field.onChange}
                          placeholder={LL.placeholder.month()}
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
                          options={['2022', '2021']}
                          value={field.value}
                          onChange={field.onChange}
                          placeholder={LL.placeholder.year()}
                          error={!!errors?.step26?.contacted?.year}
                        />
                      </div>
                    )}
                  />
                </div>

                <FieldErrorMessage
                  name="step26.contacted.month"
                  errors={errors}
                />

                <FieldErrorMessage
                  name="step26.contacted.year"
                  errors={errors}
                />
              </div>
            </>
          )}

          {contacted === LL.choices.yesNo[0]() && (
            <div>
              <Label number="6.14" required>
                {LL.questions[614]()}
              </Label>
              <Controller
                name="step26.contacted.problem"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[
                      LL.choices[614][0](),
                      LL.choices[614][1](),
                      LL.choices[614][2](),
                      LL.choices[614][3](),
                      LL.choices[614][4](),
                      LL.choices[614][5](),
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
                    error={!!errors?.step26?.contacted?.problem}
                  />
                )}
              />
              <FieldErrorMessage
                name="step26.contacted.problem"
                errors={errors}
              />
            </div>
          )}

          {otherProblem && (
            <div>
              <Label number="6.15" required>
                {LL.questions[615]()}
              </Label>
              <Input
                {...register('step26.contacted.other', { required: true })}
                error={!!errors?.step26?.contacted?.other}
              />
              <FieldErrorMessage
                name="step26.contacted.other"
                errors={errors}
              />
            </div>
          )}

          {contacted === LL.choices.yesNo[0]() && (
            <div>
              <Label number="6.16" required>
                {LL.questions[616]()}
              </Label>

              <div css={tw`flex flex-col space-y-4 mt-4`}>
                {[
                  LL.choices.serviceProvider[0](),
                  LL.choices.serviceProvider[1](),
                  LL.choices.serviceProvider[2](),
                  LL.choices.serviceProvider[3](),
                  LL.choices.serviceProvider[4](),
                ].map(option => (
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
                {LL.questions[617]()}
              </Label>

              <div css={tw`flex flex-col space-y-4 mt-4`}>
                {[
                  LL.choices[617][0](),
                  LL.choices[617][1](),
                  LL.choices[617][2](),
                  LL.choices[617][3](),
                  LL.choices[617][4](),
                  LL.choices[617][5](),
                  LL.choices[617][6](),
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
                {LL.questions[618]()}
              </Label>
              <Controller
                name="step26.treatFairPolite"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
                    error={!!errors?.step26?.treatFairPolite}
                  />
                )}
              />
              <FieldErrorMessage
                name="step26.treatFairPolite"
                errors={errors}
              />
            </div>
          )}

          {contactedSASB && (
            <div>
              <Label number="6.19" required>
                {LL.questions[619]()}
              </Label>
              <Controller
                name="step26.moreThanOneCall"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
                    error={!!errors?.step26?.moreThanOneCall}
                  />
                )}
              />
              <FieldErrorMessage
                name="step26.moreThanOneCall"
                errors={errors}
              />
            </div>
          )}

          {contactedSASB && (
            <div>
              <Label number="6.20" required>
                {LL.questions[620]()}
              </Label>
              <Controller
                name="step26.bribe"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
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
                {LL.questions[621]()}
              </Label>
              <Controller
                name="step26.anotherEntity"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[LL.choices.entity[0](), LL.choices.entity[1]()]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
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
                {LL.questions[622]()}
              </Label>
              <Controller
                name="step26.problemResolved"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
                    error={!!errors?.step26?.problemResolved}
                  />
                )}
              />
              <FieldErrorMessage
                name="step26.problemResolved"
                errors={errors}
              />
            </div>
          )}

          {contactedSASB && (
            <div>
              <Label number="6.23" required>
                {LL.questions[623]()}
              </Label>
              <Controller
                name="step26.howLong"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={[
                      LL.choices.howLong[0](),
                      LL.choices.howLong[1](),
                      LL.choices.howLong[2](),
                      LL.choices.howLong[3](),
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.choices.placeholder()}
                    error={!!errors?.step26?.howLong}
                  />
                )}
              />
              <FieldErrorMessage name="step26.howLong" errors={errors} />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Step26
