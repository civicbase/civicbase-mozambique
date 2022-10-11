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
          <div css={tw`flex justify-between mb-5`}>
            <Typography>{LL.help.notImportant()}</Typography>
            <Typography>{LL.help.veryImportant()}</Typography>
          </div>
          <div css={tw`flex justify-between`}>
            {[0, 1, 2, 3, 4, 5].map(option => (
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
          <div css={tw`flex justify-between mb-5`}>
            <Typography>{LL.help.stronglyDisagree()}</Typography>
            <Typography>{LL.help.stronglyAgree()}</Typography>
          </div>
          <div css={tw`flex justify-between`}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(option => (
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
