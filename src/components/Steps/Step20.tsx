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
import manholesImage from '../../images/manhole_covers.jpg'

const Step20 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    const f = getValues('section5.finishAt')
    const s = getValues('section6.startAt')

    if (!f) {
      setValue('section5.finishAt', getLocalDate())
    }

    if (!s) {
      setValue('section6.startAt', getLocalDate())
    }
  }, [])

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[25]()} />

      <Typography>
        <Caption css={tw`mr-3`}>6.1</Caption>
        {LL.questions[61]()}
      </Typography>

      <div>
        <Label number="6.2" required>
          {LL.questions[62]()}
        </Label>

        {[LL.choices.problems[0](), LL.choices.problems[1](), LL.choices.problems[2](), LL.choices.problems[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step20.drainageBoxBlocked`)} value={option} />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step20.drainageBoxBlocked" errors={errors} />
      </div>

      <div>
        <Label number="6.4" required>
          {LL.questions[64]()}
        </Label>

        <img src={manholesImage} alt="manholes" />

        {[LL.choices.problems[0](), LL.choices.problems[1](), LL.choices.problems[2](), LL.choices.problems[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step20.drainageDitchBlock`)} value={option} />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step20.drainageDitchBlock" errors={errors} />
      </div>

      <div>
        <Label number="6.6" required>
          {LL.questions[66]()}
        </Label>

        {[LL.choices.problems[0](), LL.choices.problems[1](), LL.choices.problems[2](), LL.choices.problems[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step20.walkedWater`)} value={option} />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step20.walkedWater" errors={errors} />
      </div>

      <div>
        <Label number="6.8" required>
          {LL.questions[68]()}
        </Label>

        {[LL.choices.problems[0](), LL.choices.problems[1](), LL.choices.problems[2](), LL.choices.problems[3]()].map(
          (option) => (
            <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
              <Radio {...register(`step20.StagnantWaterDisease`)} value={option} />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ),
        )}

        <FieldErrorMessage name="step20.StagnantWaterDisease" errors={errors} />
      </div>

      <div>
        <Label number="6.9" required>
          {LL.questions[69]()}
        </Label>

        {[
          LL.choices.satisfaction[0](),
          LL.choices.satisfaction[1](),
          LL.choices.satisfaction[2](),
          LL.choices.satisfaction[3](),
        ].map((option) => (
          <label css={tw`flex space-x-2 space-y-4 items-baseline select-none`} key={option}>
            <Radio {...register(`step20.StagnantWaterReductions`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step20.StagnantWaterReductions" errors={errors} />
      </div>
    </div>
  )
}

export default Step20
