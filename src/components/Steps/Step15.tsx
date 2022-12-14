import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import { useI18nContext } from 'i18n/i18n-react'

const Step15 = () => {
  const { LL } = useI18nContext()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.53" required>
          {LL.questions[453]()}
        </Label>
        <Controller
          name="step15.shareSASBSatisfaction"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step15?.shareSASBSatisfaction}
            />
          )}
        />
        <FieldErrorMessage name="step15.shareSASBSatisfaction" errors={errors} />
      </div>

      <div>
        <Label number="4.54" required>
          {LL.questions[454]()}
        </Label>
        <Controller
          name="step15.knowHowContactSASB"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step15?.knowHowContactSASB}
            />
          )}
        />
        <FieldErrorMessage name="step15.knowHowContactSASB" errors={errors} />
      </div>
    </div>
  )
}

export default Step15
