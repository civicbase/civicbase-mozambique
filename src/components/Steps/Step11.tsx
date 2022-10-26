import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Heading from 'components/Heading'
import Typography from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step11 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const price = watch('step11.pricePreference')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[14]()} />

      <div>
        <Label required number="4.34">
          {LL.questions[434]()}
        </Label>

        <Typography css={tw`pt-8`}>{price} MT</Typography>

        <input
          type="range"
          css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
          min="1850"
          max="2850"
          step="100"
          {...register(`step11.pricePreference`)}
        />

        <FieldErrorMessage name="step11.pricePreference" errors={errors} />
      </div>
    </div>
  )
}

export default Step11
