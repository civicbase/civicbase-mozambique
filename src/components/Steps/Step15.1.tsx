import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step15 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        For the one time sewer connection cost. They propose an average price of
        (X). You proposed the price (Y).
      </Typography>

      <div>
        <Label required>
          Can you tell us how satisfied you are with the community's proposal?
        </Label>
        <div css={tw`flex justify-between`}>
          {[
            'Strongly Satisfied',
            'Somewhat Satisfied',
            'Somewhat Dissatisfied',
            'Strongly Dissastisfied',
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio
                {...register(`step15.happy_community_proposal`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>
          Please let us know the new price that you would be willing to pay?
        </Label>
        <Input
          {...register('step15.willing_pay', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors?.step15?.willing_pay}
          type="number"
        />

        <FieldErrorMessage name="step15.willing_pay" errors={errors} />
      </div>
    </div>
  )
}

export default Step15
