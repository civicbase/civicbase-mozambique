import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step16 = () => {
  const { register } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.41" required>
          Overall, are you satisfied with the quality of your CURRENT sewer
          services?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'Satisfied',
            'Somewhat Satisfied',
            'Somewhat Dissatisfied',
            'Dissastisfied',
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio
                {...register(`step16.satisfaction.sewer`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label number="4.42" required>
          If you compare the quality of sewer services you received between
          April and September 2021 to the services you received in the last 6
          months, have you noticed any improvements?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'No, it has gotten worse',
            'No change',
            'Yes, it has improved',
            `Don't know`,
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center`}>{option}</span>
              <Radio
                {...register(`step16.satisfaction.last6Months`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Step16
