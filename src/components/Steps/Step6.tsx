import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'
import Heading from 'components/Heading'

const Step6 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Sharing Information" />

      <div>
        <Label number="4.11" required>
          One the scale of 0 to 5, with 0 being not at all important and 5 being
          very important, do you think what I have just shared with you is
          important to you and the people in this neighborhood?
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between mb-5`}>
            <Typography>Not at all Important</Typography>
            <Typography>Very Important</Typography>
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
          On the scale of 1 to 10, with one being the lowest and 10 being the
          highest,how likely are you to share what I have just told you to other
          people in this neighborhood?
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between mb-5`}>
            <Typography>Strongly Disagree</Typography>
            <Typography>Strongly Agree</Typography>
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
