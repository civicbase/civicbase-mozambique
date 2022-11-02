import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step5 = () => {
  const {
    getValues,
    register,
    formState: { errors },
  } = useFormContext()
  const { LL } = useI18nContext()

  const content = getValues('step5.content')

  return (
    <div css={tw`grid grid-cols-1 gap-6 pb-40`}>
      <Heading subtitle={LL.headings[5]()} />

      {content === 'Treatment' && (
        <div css={tw`grid grid-cols-1 gap-2`}>
          <Typography css={tw`text-justify`}>
            <Caption css={tw`mr-3`}>4.9 Treatment</Caption>
            {LL.questions[49].paragraph1()}
          </Typography>

          <Typography css={tw`text-justify`}>{LL.questions[49].paragraph2()}</Typography>

          <div>
            <Typography css={tw`text-justify`}>1) {LL.questions[49].paragraph3()}</Typography>
            <Typography css={tw`text-justify`}>2) {LL.questions[49].paragraph4()}</Typography>
            <Typography css={tw`text-justify`}>3) {LL.questions[49].paragraph5()}</Typography>
            <Typography css={tw`text-justify`}>4) {LL.questions[49].paragraph6()}</Typography>
          </div>

          <Typography css={tw`text-justify`}>{LL.questions[49].paragraph7()}</Typography>
        </div>
      )}
      {content === 'Control' && (
        <Typography css={tw`text-justify`}>
          <Caption css={tw`mr-3`}>4.10 Control</Caption>
          {LL.questions[410]()}
        </Typography>
      )}

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
            ].map((option) => (
              <label css={tw`flex flex-col space-y-2 items-center select-none`} key={option}>
                <Radio {...register(`step5.relevantInformation`)} value={option} />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <FieldErrorMessage name="step5.relevantInformation" errors={errors} />
      </div>

      <div>
        <Label number="4.12" required>
          {LL.questions[412]()}
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between`}>
            {[LL.choices.likely[0](), LL.choices.likely[1](), LL.choices.likely[2](), LL.choices.likely[3]()].map(
              (option) => (
                <label css={tw`flex flex-col space-y-2 items-center select-none`} key={option}>
                  <Radio {...register(`step5.shareInformation`)} value={option} />
                  <span css={tw`text-center`}>{option}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <FieldErrorMessage name="step5.shareInformation" errors={errors} />
      </div>
    </div>
  )
}

export default memo(Step5)
