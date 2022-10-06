import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Dropdown from 'components/Dropdown'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'

const bill = () => {
  const { LL, setLocale } = useI18nContext()
  const {
    control,
    watch,
    register,
    formState: { errors },
  } = useFormContext()

  const language = watch('language')

  useEffect(() => {
    if (language === 'English') {
      setLocale('en')
    } else if (language === 'Português') {
      setLocale('pt')
    }
  }, [language])

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.1" required>
          Please enter unique ID
        </Label>
        <Input
          {...register('step1.unique_id', { required: true })}
          error={!!errors?.step1?.unique_id}
          disabled={true}
        />
        <FieldErrorMessage name="step1.unique_id" errors={errors} />
      </div>

      <div>
        <Label required>{LL.language()}</Label>
        <Controller
          name="language"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['English', 'Português']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select a language"
              error={!!errors?.step1?.language}
            />
          )}
        />
        <FieldErrorMessage name="language" errors={errors} />
      </div>
    </div>
  )
}

export default bill
