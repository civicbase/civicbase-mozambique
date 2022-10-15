import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'

const Step6 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[6]()} />

      <div>
        <Label number="4.11" required>
          {LL.questions[411]()}
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between`}>
            {[
              LL.choices.importance[0](),
              LL.choices.importance[1](),
              LL.choices.importance[2](),
              LL.choices.importance[3](),
            ].map(option => (
              <label
                css={tw`flex flex-col space-y-2 items-center select-none`}
                key={option}
              >
                <Radio
                  {...register(`step6.relevantInformation`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <FieldErrorMessage name="step6.relevantInformation" errors={errors} />
      </div>

      <div>
        <Label number="4.12" required>
          {LL.questions[412]()}
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between`}>
            {[
              LL.choices.likely[0](),
              LL.choices.likely[1](),
              LL.choices.likely[2](),
              LL.choices.likely[3](),
            ].map(option => (
              <label
                css={tw`flex flex-col space-y-2 items-center select-none`}
                key={option}
              >
                <Radio {...register(`step6.shareInformation`)} value={option} />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <FieldErrorMessage name="step6.shareInformation" errors={errors} />
      </div>
    </div>
  )
}

export default Step6
