import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'

const Step3 = () => {
  const { LL } = useI18nContext()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[3]()} />

      <div>
        <Label number="4.7" required>
          {LL.questions[47]()}
        </Label>

        <Controller
          name="step3.compare"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[
                LL.choices.compare[0](),
                LL.choices.compare[1](),
                LL.choices.compare[2](),
              ]}
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
