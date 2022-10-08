import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step19 = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext()

  const connection = getValues('step2.sanitationType')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Experience with Household Sewer Services" />

      <Typography>
        <Caption css={tw`mr-3`}>5.1</Caption>I will now ask you about your
        experiences with your sewer connection in your household and
        neighborhood block . For each experience, we want to know in how many
        months this happened to you since April 2022. Even if it happened just
        once during a month, we would like to count that month
      </Typography>

      {connection === 'Flush to Sewer' && (
        <div>
          <Label number="5.2" required>
            How often did you experience a sewer blockage/breakage/overflow in
            your dwelling or compound?
          </Label>

          {[
            'Yes, during 1 or 2 months (Rarely)',
            'Yes, 3 months or more but not all (Sometimes)',
            'Yes, all months (Regularly)',
            'No, never',
          ].map(option => (
            <label
              css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
              key={option}
            >
              <Radio
                {...register(`step19.oftenSewerDwellingCompoundProblem`)}
                value={option}
              />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ))}

          <FieldErrorMessage
            name="step19.oftenSewerDwellingCompoundProblem"
            errors={errors}
          />
        </div>
      )}

      {connection === 'Flush to Sewer' && (
        <div>
          <Label number="5.3" required>
            If you compare the frequency of sewer blockages/breakages/overflows
            in your dwelling or compound between April and September 2021 to
            those in the last 6 months, have you noticed any REDUCTIONS?
          </Label>

          {[
            'No, it has gotten worse',
            'No change',
            'Yes, it has reduced',
            `Don't know`,
          ].map(option => (
            <label
              css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
              key={option}
            >
              <Radio
                {...register(`step19.sewerDwellingCompoundReductions`)}
                value={option}
              />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ))}

          <FieldErrorMessage
            name="step19.sewerDwellingCompoundReductions"
            errors={errors}
          />
        </div>
      )}

      <div>
        <Label number="5.4" required>
          How often did you experience a sewer blockage/breakage/overflow in
          your neighborhood block?
        </Label>

        {[
          'Yes, during 1 or 2 months (Rarely)',
          'Yes, 3 months or more but not all (Sometimes)',
          'Yes, all months (Regularly)',
          'No, never',
        ].map(option => (
          <label
            css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
            key={option}
          >
            <Radio {...register(`step19.oftenSewerProblem`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step19.oftenSewerProblem" errors={errors} />
      </div>

      <div>
        <Label number="5.5" required>
          If you compare the frequency of sewer blockages/breakages/overflows in
          your neighborhood block between April and September 2021 to those in
          the last 6 months, have you noticed any REDUCTIONS?
        </Label>

        {[
          'No, it has gotten worse',
          'No change',
          'Yes, it has reduced',
          `Don't know`,
        ].map(option => (
          <label
            css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
            key={option}
          >
            <Radio {...register(`step19.sewerReductions`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step19.sewerReductions" errors={errors} />
      </div>

      {connection === 'Flush to Sewer' && (
        <div>
          <Label number="5.6" required>
            How often did you experience bad sewer smell in your dwelling or
            compound?
          </Label>

          {[
            'Yes, during 1 or 2 months (Rarely)',
            'Yes, 3 months or more but not all (Sometimes)',
            'Yes, all months (Regularly)',
            'No, never',
          ].map(option => (
            <label
              css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
              key={option}
            >
              <Radio
                {...register(`step19.oftenBadSmellDwellingCompound`)}
                value={option}
              />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ))}

          <FieldErrorMessage
            name="step19.oftenBadSmellDwellingCompound"
            errors={errors}
          />
        </div>
      )}

      {connection === 'Flush to Sewer' && (
        <div>
          <Label number="5.7" required>
            If you compare the frequency of bad sewer smell in your dwelling or
            compound between April and September 2021 to those in the last 6
            months, have you noticed any REDUCTIONS?
          </Label>

          {[
            'No, it has gotten worse',
            'No change',
            'Yes, it has reduced',
            `Don't know`,
          ].map(option => (
            <label
              css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
              key={option}
            >
              <Radio
                {...register(`step19.sewerBadSmellDwellingCompoundReductions`)}
                value={option}
              />
              <span css={tw`text-center`}>{option}</span>
            </label>
          ))}

          <FieldErrorMessage
            name="step19.sewerBadSmellDwellingCompoundReductions"
            errors={errors}
          />
        </div>
      )}
    </div>
  )
}

export default Step19
