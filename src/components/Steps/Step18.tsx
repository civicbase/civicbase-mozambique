import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import { useI18nContext } from 'i18n/i18n-react'

const Step18 = () => {
  const { LL } = useI18nContext()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  // TODO address Y
  //   j. (Y) 4.53 refers to 4.38 price. Set 4.54 to the (Y) 4.53 if stay the same

  // k. (Y) 5.30 refers to 4.54 value. Set 5.31 to (Y) 5.30 if stay the same

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.53" required>
          {LL.questions[453]()}
        </Label>
        <Controller
          name="step18.shareSASBSatisfaction"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step18?.shareSASBSatisfaction}
            />
          )}
        />
        <FieldErrorMessage name="step18.shareSASBSatisfaction" errors={errors} />
      </div>

      <div>
        <Label number="4.54" required>
          {LL.questions[454]()}
        </Label>
        <Controller
          name="step18.knowHowContactSASB"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step18?.knowHowContactSASB}
            />
          )}
        />
        <FieldErrorMessage name="step18.knowHowContactSASB" errors={errors} />
      </div>
    </div>
  )
}

export default Step18
