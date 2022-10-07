import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography from 'components/Typography'

const Step17 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.51" required>
          On the scale of 1 to 10, with one being the lowest and 10 being the
          highest, how likely are you to share YOUR SATISFACTION towards the
          SASB's services mentioned above to other people in this neighborhood?
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
                <Radio
                  {...register(`step17.SASBSatisfaction`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <FieldErrorMessage name="step17.shareInformation" errors={errors} />
      </div>

      <div>
        <Label number="4.52" required>
          With whom would you like to share YOUR SATISFACTION/OPINON to? You may
          provide up to 5 names. Specify your relationship and closeness for
          each person. For closeness , please refer to the diagram provided
          above
        </Label>
        TODO
      </div>
    </div>
  )
}

export default Step17
