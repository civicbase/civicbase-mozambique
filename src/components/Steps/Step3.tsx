import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import Input from 'components/Form/Input'

const Step3 = () => {
  const { LL } = useI18nContext()
  const {
    control,
    getValues,
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const shareBill = watch('step3.waterBill.share')
  const dwellingType = getValues('step2.dwellingType')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[3]()} />

      {(dwellingType === LL.choices.dwellingType[1]() ||
        dwellingType === LL.choices.dwellingType[2]() ||
        dwellingType === LL.choices.dwellingType[3]()) && (
        <>
          <div>
            <Label number="4.5" required>
              {LL.questions[45]()}
            </Label>
            <Controller
              name="step3.waterBill.share"
              control={control}
              render={({ field }) => (
                <Dropdown
                  options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={LL.choices.placeholder()}
                  error={!!errors?.step3?.waterBill?.share}
                />
              )}
            />
            <FieldErrorMessage name="step3.waterBill.share" errors={errors} />
          </div>

          {shareBill === LL.choices.yesNo[0]() && (
            <>
              <div>
                <Label number="4.6" required>
                  {LL.questions[46]()}
                </Label>

                <Input
                  {...register('step3.waterBill.shareNumber', {
                    required: true,
                    valueAsNumber: true,
                  })}
                  error={!!errors?.step3?.waterBill?.shareNumber}
                  type="number"
                />

                <FieldErrorMessage name="step3.waterBill.shareNumber" errors={errors} />
              </div>
            </>
          )}
        </>
      )}

      <div>
        <Label number="4.7" required>
          {LL.questions[47]()}
        </Label>

        <Controller
          name="step3.compare"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.compare[0](), LL.choices.compare[1](), LL.choices.compare[2]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step3?.compare}
            />
          )}
        />

        <FieldErrorMessage name="step3.compare" errors={errors} />
      </div>
    </div>
  )
}

export default Step3
