import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'

const Step2 = () => {
  const { LL } = useI18nContext()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[2]()} />

      <div>
        <Label number="4.2" required>
          {LL.questions[42]()}
        </Label>
        <Controller
          name="step2.neighborhood"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[
                'Pioneiros',
                'Chaimiti',
                'Esturro',
                'Ponta Gea',
                'Chipangara',
                'Matacuane',
                'Macurungo',
                'Macuti',
                'Munhava Central',
              ]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step2?.neighborhood}
            />
          )}
        />
        <FieldErrorMessage name="step2.neighborhood" errors={errors} />
      </div>

      <div>
        <Label number="4.3" required>
          {LL.questions[43]()}
        </Label>
        <Controller
          name="step2.sanitationType"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.sanitationType[0](), LL.choices.sanitationType[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step2?.sanitationType}
            />
          )}
        />
        <FieldErrorMessage name="step2.sanitationType" errors={errors} />
      </div>

      <div>
        <Label number="4.4" required>
          {LL.questions[44]()}
        </Label>
        <Controller
          name="step2.dwellingType"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[
                LL.choices.dwellingType[0](),
                LL.choices.dwellingType[1](),
                LL.choices.dwellingType[2](),
                LL.choices.dwellingType[3](),
              ]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step2?.dwellingType}
            />
          )}
        />
        <FieldErrorMessage name="step2.dwellingType" errors={errors} />
      </div>
    </div>
  )
}

export default Step2
