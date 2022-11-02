import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step21 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  const problem = watch('step21.contacted.problem')
  const contactedSASB = watch('step21.contacted.who.SASB')
  const contactedDrainageIssue = watch('step21.contactedDrainageIssue') === LL.choices.yesNo[0]()
  const problemResolved = watch('step21.problemResolved') === LL.choices.yesNo[0]()

  return (
    <div css={tw`grid grid-cols-1 gap-6 pb-40`}>
      <Heading subtitle={LL.headings[26]()} />

      <div>
        <Label number="6.12" required>
          {LL.questions[612]()}
        </Label>
        <Controller
          name="step21.contactedDrainageIssue"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step21?.contactedDrainageIssue}
            />
          )}
        />
        <FieldErrorMessage name="step21.contactedDrainageIssue" errors={errors} />
      </div>

      {contactedDrainageIssue && (
        <div>
          <Label number="6.13" required>
            {LL.questions[613]()}
          </Label>

          <div css={tw`flex space-x-2`}>
            <Controller
              name="step21.contacted.month"
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
                    error={!!errors?.step21?.contacted?.month}
                  />

                  <FieldErrorMessage name="step21.contacted.month" errors={errors} />
                </div>
              )}
            />
            <Controller
              name="step21.contacted.year"
              control={control}
              render={({ field }) => (
                <div css={tw`flex-1`}>
                  <Dropdown
                    options={['2022', '2021']}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.placeholder.year()}
                    error={!!errors?.step21?.contacted?.year}
                  />

                  <FieldErrorMessage name="step21.contacted.year" errors={errors} />
                </div>
              )}
            />
          </div>
        </div>
      )}

      {contactedDrainageIssue && (
        <div>
          <Label number="6.14" required>
            {LL.questions[614]()}
          </Label>
          <Controller
            name="step21.contacted.problem"
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
                error={!!errors?.step21?.contacted?.problem}
              />
            )}
          />
          <FieldErrorMessage name="step21.contacted.problem" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && problem === LL.choices[614][5]() && (
        <div>
          <Label number="6.15" required>
            {LL.questions[615]()}
          </Label>

          <Input
            {...register('step21.contacted.other', { required: true })}
            error={!!errors?.step21?.contacted?.other}
          />

          <FieldErrorMessage name="step21.contacted.other" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && (
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
              LL.choices.serviceProvider[5](),
            ].map((option) => (
              <label css={tw`inline-flex space-x-4 items-center select-none`} key={option}>
                <Checkbox {...register(`step21.contacted.who.${option}`)} />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <FieldErrorMessage name="step21.contacted.who" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && !contactedSASB && (
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
              <label css={tw`inline-flex space-x-4 items-center select-none`} key={option}>
                <Checkbox {...register(`step21.SASBNotContactedReasons.${index}`)} />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <FieldErrorMessage name="step21.SASBNotContactedReasons" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && contactedSASB && (
        <div>
          <Label number="6.18" required>
            {LL.questions[618]()}
          </Label>
          <Controller
            name="step21.treatFairPolite"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step21?.treatFairPolite}
              />
            )}
          />
          <FieldErrorMessage name="step21.treatFairPolite" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && contactedSASB && (
        <div>
          <Label number="6.19" required>
            {LL.questions[619]()}
          </Label>
          <Controller
            name="step21.moreThanOneCall"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step21?.moreThanOneCall}
              />
            )}
          />
          <FieldErrorMessage name="step21.moreThanOneCall" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && contactedSASB && (
        <div>
          <Label number="6.20" required>
            {LL.questions[620]()}
          </Label>
          <Controller
            name="step21.bribe"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step21?.bribe}
              />
            )}
          />
          <FieldErrorMessage name="step21.bribe" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && contactedSASB && (
        <div>
          <Label number="6.21" required>
            {LL.questions[621]()}
          </Label>
          <Controller
            name="step21.anotherEntity"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.entity[0](), LL.choices.entity[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step21?.anotherEntity}
              />
            )}
          />
          <FieldErrorMessage name="step21.anotherEntity" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && contactedSASB && (
        <div>
          <Label number="6.22" required>
            {LL.questions[622]()}
          </Label>
          <Controller
            name="step21.problemResolved"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step21?.problemResolved}
              />
            )}
          />
          <FieldErrorMessage name="step21.problemResolved" errors={errors} />
        </div>
      )}

      {contactedDrainageIssue && contactedSASB && problemResolved && (
        <div>
          <Label number="6.23" required>
            {LL.questions[623]()}
          </Label>
          <Controller
            name="step21.howLong"
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
                error={!!errors?.step21?.howLong}
              />
            )}
          />
          <FieldErrorMessage name="step21.howLong" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step21
