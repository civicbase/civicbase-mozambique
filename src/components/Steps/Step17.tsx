import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step17 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const contactecSASB = getValues(`step17.contactedWho.SASB`)
  const contactedOther = watch('step17.contactedWho')
  const contactedBefore = watch('step17.contacted') === LL.choices.yesNo[0]()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[20]()} />

      <div>
        <Label number="5.8" required>
          {LL.questions[58]()}
        </Label>
        <Controller
          name="step17.contacted"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step17?.contacted}
            />
          )}
        />
        <FieldErrorMessage name="step17.contacted" errors={errors} />
      </div>

      {contactedBefore && (
        <div>
          <Label number="5.9" required>
            {LL.questions[59]()}
          </Label>

          <div css={tw`flex space-x-2`}>
            <Controller
              name="step17.contactedMonth"
              control={control}
              render={({ field }) => (
                <div css={tw`flex-1 flex flex-col`}>
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
                    placeholder="Month"
                    error={!!errors?.step17?.contactedMonth}
                  />

                  <FieldErrorMessage name="step17.contactedMonth" errors={errors} />
                </div>
              )}
            />
            <Controller
              name="step17.contactedYear"
              control={control}
              render={({ field }) => (
                <div css={tw`flex-1 flex flex-col`}>
                  <Dropdown
                    options={['2022', '2021']}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Year"
                    error={!!errors?.step17?.contactedYear}
                  />

                  <FieldErrorMessage name="step17.contactedYear" errors={errors} />
                </div>
              )}
            />
          </div>
        </div>
      )}

      {contactedBefore && (
        <div>
          <Label number="5.10" required>
            {LL.questions[510]()}
          </Label>
          <Controller
            name="step17.problem"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[
                  LL.choices[510][0](),
                  LL.choices[510][1](),
                  LL.choices[510][2](),
                  LL.choices[510][3](),
                  LL.choices[510][4](),
                  LL.choices[510][5](),
                  LL.choices[510][6](),
                  LL.choices[510][7](),
                ]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step17?.problem}
              />
            )}
          />
          <FieldErrorMessage name="step17.problem" errors={errors} />
        </div>
      )}

      {contactedBefore && (
        <div>
          <Label number="5.11" required>
            {LL.questions[511]()}
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
                <Checkbox {...register(`step17.contactedWho.${option}`)} />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <FieldErrorMessage name="step17.contactedWho" errors={errors} />
        </div>
      )}

      {contactedBefore && contactedOther && contactedOther[LL.choices.serviceProvider[5]()] && (
        <div>
          <Label number="5.12" required>
            {LL.questions[512]()}
          </Label>
          <Input {...register('step17.contactedOther', { required: true })} error={!!errors?.step17?.contactedOther} />
          <FieldErrorMessage name="step17.contactedOther" errors={errors} />
        </div>
      )}

      {contactedBefore && !contactecSASB && (
        <div>
          <Label number="5.13" required>
            {LL.questions[513]()}
          </Label>

          <div css={tw`flex flex-col space-y-4 mt-4`}>
            {[
              LL.choices[513][0](),
              LL.choices[513][1](),
              LL.choices[513][2](),
              LL.choices[513][3](),
              LL.choices[513][4](),
              LL.choices[513][5](),
              LL.choices[513][6](),
            ].map((option, index) => (
              <label css={tw`inline-flex space-x-4 items-center select-none`} key={option}>
                <Checkbox {...register(`step17.whyDidntContacted.${index}`)} />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <FieldErrorMessage name="step17.whyDidntContacted" errors={errors} />
        </div>
      )}
      {contactedBefore && contactecSASB && (
        <div>
          <Label number="5.14" required>
            {LL.questions[514]()}
          </Label>
          <Controller
            name="step17.treatFairPolite"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step17?.treatFairPolite}
              />
            )}
          />
          <FieldErrorMessage name="step17.treatFairPolite" errors={errors} />
        </div>
      )}

      {contactedBefore && contactecSASB && (
        <div>
          <Label number="5.15" required>
            {LL.questions[515]()}
          </Label>
          <Controller
            name="step17.moreThanOneCall"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step17?.moreThanOneCall}
              />
            )}
          />
          <FieldErrorMessage name="step17.moreThanOneCall" errors={errors} />
        </div>
      )}

      {contactedBefore && contactecSASB && (
        <div>
          <Label number="5.16" required>
            {LL.questions[516]()}
          </Label>
          <Controller
            name="step17.bribe"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step17?.bribe}
              />
            )}
          />
          <FieldErrorMessage name="step17.bribe" errors={errors} />
        </div>
      )}

      {contactedBefore && contactecSASB && (
        <div>
          <Label number="5.17" required>
            {LL.questions[517]()}
          </Label>
          <Controller
            name="step17.anotherEntity"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.entity[0](), LL.choices.entity[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step17?.anotherEntity}
              />
            )}
          />
          <FieldErrorMessage name="step17.anotherEntity" errors={errors} />
        </div>
      )}

      {contactedBefore && contactecSASB && (
        <div>
          <Label number="5.18" required>
            {LL.questions[518]()}
          </Label>
          <Controller
            name="step17.problemResolved"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step17?.problemResolved}
              />
            )}
          />
          <FieldErrorMessage name="step17.problemResolved" errors={errors} />
        </div>
      )}

      {contactedBefore && contactecSASB && (
        <div>
          <Label number="5.19" required>
            {LL.questions[519]()}
          </Label>
          <Controller
            name="step17.howLong"
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
                error={!!errors?.step17?.howLong}
              />
            )}
          />
          <FieldErrorMessage name="step17.howLong" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Step17
