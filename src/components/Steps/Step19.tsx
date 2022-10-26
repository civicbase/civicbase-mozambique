import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step19 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[23]()} />

      <div>
        <Label number="5.24" required>
          {LL.questions[524]()}
        </Label>
        <Controller
          name="step19.treatFairPolite"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step19?.treatFairPolite}
            />
          )}
        />
        <FieldErrorMessage name="step19.treatFairPolite" errors={errors} />
      </div>

      <div>
        <Label number="5.25" required>
          {LL.questions[525]()}
        </Label>
        <Controller
          name="step19.moreThanOneCall"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step19?.moreThanOneCall}
            />
          )}
        />
        <FieldErrorMessage name="step19.moreThanOneCall" errors={errors} />
      </div>

      <div>
        <Label number="5.26" required>
          {LL.questions[526]()}
        </Label>
        <Controller
          name="step19.bribe"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step19?.bribe}
            />
          )}
        />
        <FieldErrorMessage name="step19.bribe" errors={errors} />
      </div>

      <div>
        <Label number="5.27" required>
          {LL.questions[527]()}
        </Label>
        <Controller
          name="step19.dealthWith"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.entity[0](), LL.choices.entity[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step19?.dealthWith}
            />
          )}
        />
        <FieldErrorMessage name="step19.dealthWith" errors={errors} />
      </div>

      <div>
        <Label number="5.28" required>
          {LL.questions[528]()}
        </Label>
        <Controller
          name="step19.problemResolved"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[LL.choices.yesNo[0](), LL.choices.yesNo[1]()]}
              value={field.value}
              onChange={field.onChange}
              placeholder={LL.choices.placeholder()}
              error={!!errors?.step19?.problemResolved}
            />
          )}
        />
        <FieldErrorMessage name="step19.problemResolved" errors={errors} />
      </div>

      <div>
        <Label number="5.29" required>
          {LL.questions[529]()}
        </Label>

        {[LL.choices.howLong[0](), LL.choices.howLong[1](), LL.choices.howLong[2](), LL.choices.howLong[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step19.howLong`)} value={option} />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step19.howLong" errors={errors} />
      </div>
    </div>
  )
}

export default Step19
