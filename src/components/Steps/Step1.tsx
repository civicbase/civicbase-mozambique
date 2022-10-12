import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'
import Heading from 'components/Heading'
import { LANGUAGE } from 'utils/enums'

const Step1 = () => {
  const { LL, setLocale } = useI18nContext()
  const {
    control,
    watch,
    register,
    formState: { errors },
  } = useFormContext()

  const language = watch('step1.language')

  useEffect(() => {
    if (language === LL.choices.languages[0]()) {
      setLocale('en')
    } else if (language === LL.choices.languages[1]()) {
      setLocale('pt')
    }
  }, [language])

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading
        title="Section 4: Willingness to Pay"
        subtitle={LL.headings[1]()}
      />

      <div>
        <Label number="4.1" required>
          {/* Please enter unique ID */}
          {LL.questions[41]()}
        </Label>
        <Input
          {...register('step1.uniqueId', { required: true })}
          error={!!errors?.step1?.uniqueId}
          disabled={true}
        />
        <FieldErrorMessage name="step1.uniqueId" errors={errors} />
      </div>

      <div>
        <Label required>{LL.questions.language()}</Label>
        <Controller
          name="step1.language"
          control={control}
          render={({ field }) => {
            return (
              <Dropdown
                options={[LL.choices.languages[0](), LL.choices.languages[1]()]}
                value={field.value}
                onChange={field.onChange}
                placeholder={LL.choices.placeholder()}
                error={!!errors?.step1?.language}
              />
            )
          }}
        />
        <FieldErrorMessage name="step1.language" errors={errors} />
      </div>
    </div>
  )
}

export default Step1
