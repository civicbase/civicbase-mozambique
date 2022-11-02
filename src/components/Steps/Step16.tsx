import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { getLocalDate } from 'utils/getLocalDate'

const Step16 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    const f = getValues('section4.finishAt')
    const s = getValues('section5.startAt')

    if (!f) {
      setValue('section4.finishAt', getLocalDate())
    }

    if (!s) {
      setValue('section5.startAt', getLocalDate())
    }
  }, [])

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[19]()} />

      <Typography>
        <Caption css={tw`mr-3`}>5.1</Caption>
        {LL.questions[51]()}
      </Typography>

      <div>
        <Label number="5.4" required>
          {LL.questions[54]()}
        </Label>

        {[LL.choices.problems[0](), LL.choices.problems[1](), LL.choices.problems[2](), LL.choices.problems[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step16.oftenSewerProblem`)} value={option} />
              <span>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step16.oftenSewerProblem" errors={errors} />
      </div>

      <div>
        <Label number="5.5" required>
          {LL.questions[55]()}
        </Label>

        {[
          LL.choices.satisfaction[0](),
          LL.choices.satisfaction[1](),
          LL.choices.satisfaction[2](),
          LL.choices.satisfaction[3](),
        ].map((option) => (
          <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
            <Radio {...register(`step16.sewerReductions`)} value={option} />
            <span>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step16.sewerReductions" errors={errors} />
      </div>

      <div>
        <Label number="5.6" required>
          {LL.questions[56]()}
        </Label>

        {[LL.choices.problems[0](), LL.choices.problems[1](), LL.choices.problems[2](), LL.choices.problems[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step16.oftenBadSmellDwellingCompound`)} value={option} />
              <span>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step16.oftenBadSmellDwellingCompound" errors={errors} />
      </div>

      <div>
        <Label number="5.7" required>
          {LL.questions[57]()}
        </Label>

        {[
          LL.choices.satisfaction[0](),
          LL.choices.satisfaction[1](),
          LL.choices.satisfaction[2](),
          LL.choices.satisfaction[3](),
        ].map((option) => (
          <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
            <Radio {...register(`step16.sewerBadSmellDwellingCompoundReductions`)} value={option} />
            <span>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step16.sewerBadSmellDwellingCompoundReductions" errors={errors} />
      </div>
    </div>
  )
}

export default Step16
