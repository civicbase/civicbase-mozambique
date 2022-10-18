import tw from 'twin.macro'
import { useI18nContext } from 'i18n/i18n-react'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'

const Step13 = () => {
  const { LL } = useI18nContext()
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const contacted = watch('step13.serviceProvider.contacted') === LL.choices.yesNo[0]()
  const contactedOther = watch(`step13.serviceProvider.who`)
  const contactedSASB = watch('step13.serviceProvider.who.SASB')
  const paid = watch('step13.serviceProvider.paid') === LL.choices.yesNo[0]()
  const emptiedSepticTank = watch('step13.emptiedSepticTank') === LL.choices.yesNo[0]()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[13]()} />

      <div>
        <Label number="4.25" required>
          {LL.questions[425]()}
        </Label>
        <Controller
          name="step13.emptiedSepticTank"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step13?.emptiedSepticTank}
            />
          )}
        />
        <FieldErrorMessage name="step13.emptiedSepticTank" errors={errors} />
      </div>

      {emptiedSepticTank && (
        <div>
          <Label number="4.26" required>
            {LL.questions[426]()}
          </Label>
          <Controller
            name="step13.serviceProvider.contacted"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step13?.serviceProvider?.contacted}
              />
            )}
          />
          <FieldErrorMessage name="step13.serviceProvider.contacted" errors={errors} />
        </div>
      )}

      {emptiedSepticTank && contacted && (
        <div>
          <Label number="4.27" required>
            {LL.questions[427]()}
          </Label>

          <div css={tw`flex space-x-2`}>
            <Controller
              name="step13.serviceProvider.contactedMonth"
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
                    error={!!errors?.step13?.serviceProvider?.contactedMonth}
                  />

                  <FieldErrorMessage name="step13.serviceProvider.contactedMonth" errors={errors} />
                </div>
              )}
            />
            <Controller
              name="step13.serviceProvider.contactedYear"
              control={control}
              render={({ field }) => (
                <div css={tw`flex-1`}>
                  <Dropdown
                    options={['2022', '2021']}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={LL.placeholder.year()}
                    error={!!errors?.step13?.serviceProvider?.contactedYear}
                  />

                  <FieldErrorMessage name="step13.serviceProvider.contactedYear" errors={errors} />
                </div>
              )}
            />
          </div>
        </div>
      )}

      {emptiedSepticTank && contacted && (
        <div>
          <Label number="4.28" required>
            {LL.questions[428]()}
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
                <Checkbox {...register(`step13.serviceProvider.who.${option}`)} />
                <span>{option}</span>
              </label>
            ))}

            <FieldErrorMessage name="step13.serviceProvider.who" errors={errors} />
          </div>
        </div>
      )}

      {emptiedSepticTank && contacted && contactedOther && contactedOther[LL.choices.serviceProvider[5]()] && (
        <div>
          <Label number="4.29" required>
            {LL.questions[429]()}
          </Label>
          <Input
            {...register('step13.serviceProvider.other', {
              required: true,
            })}
            error={!!errors?.step13?.serviceProvider?.other}
          />

          <FieldErrorMessage name="step13.serviceProvider.other" errors={errors} />
        </div>
      )}

      {emptiedSepticTank && contacted && !contactedSASB && (
        <div>
          <Label number="4.30" required>
            {LL.questions[430]()}
          </Label>

          <div css={tw`flex flex-col space-y-4 mt-4`}>
            {[
              LL.choices[430][0](),
              LL.choices[430][1](),
              LL.choices[430][2](),
              LL.choices[430][3](),
              LL.choices[430][4](),
              LL.choices[430][5](),
              LL.choices[430][6](),
            ].map((option, index) => (
              <label css={tw`inline-flex space-x-4 items-center select-none`} key={option}>
                <Checkbox {...register(`step13.SASBNotContactedReasons.${index}`)} />
                <span>{option}</span>
              </label>
            ))}

            <FieldErrorMessage name="step13.SASBNotContactedReasons" errors={errors} />
          </div>
        </div>
      )}

      {emptiedSepticTank && contacted && (
        <div>
          <Label number="4.31" required>
            {LL.questions[431]()}
          </Label>
          <Controller
            name="step13.serviceProvider.service"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices[431][0](), LL.choices[431][1](), LL.choices[431][2]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step13?.serviceProvider?.service}
              />
            )}
          />
          <FieldErrorMessage name="step13.serviceProvider.service" errors={errors} />
        </div>
      )}
      {emptiedSepticTank && contacted && (
        <div>
          <Label number="4.32" required>
            {LL.questions[432]()}
          </Label>
          <Controller
            name="step13.serviceProvider.paid"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step13?.serviceProvider?.paid}
              />
            )}
          />
          <FieldErrorMessage name="step13.serviceProvider.paid" errors={errors} />
        </div>
      )}

      {emptiedSepticTank && contacted && paid && (
        <div>
          <Label number="4.33" required>
            {LL.questions[433]()}
          </Label>
          <Input
            {...register('step13.serviceProvider.howMuch', {
              valueAsNumber: true,
            })}
            error={!!errors?.step13?.serviceProvider?.howMuch}
            type="number"
          />
          <FieldErrorMessage name="step13.serviceProvider.howMuch" errors={errors} />

          <label css={tw`inline-flex space-x-4 items-center select-none mt-2`}>
            <Checkbox {...register(`step13.serviceProvider.unknownHowMuch`)} />
            <span>{LL.questions.IDK()}</span>
          </label>
        </div>
      )}
    </div>
  )
}

export default memo(Step13)
