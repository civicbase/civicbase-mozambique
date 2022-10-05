import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step19 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          Overall, are you satisfied with the quality of your CURRENT sewer
          services ?
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
                {...register(`step19.quality.current_sewer`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>
          Overall, are you satisfied with the quality of drainage conditions
          that are maintained by SASB in your neighborhood ?
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
                {...register(`step19.quality.drainage_conditions`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>
          Overall, are you satisfied with the quality of SASB sewer desludging
          services ?
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
                {...register(`step19.quality.sewer_desludging`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>
          Overall, are you satisfied with the quality of SASB customer service
          when responding to your questions, complaints and requests?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'Strongly Satisfied',
            'Somewhat Satisfied',
            'Somewhat Dissatisfied',
            'Strongly Dissastisfied',
            'Not applicable',
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio
                {...register(`step19.quality.customer_service`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Step19
