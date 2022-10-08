import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step25 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Experience with Drainage Condition" />

      <Typography>
        <Caption css={tw`mr-3`}>6.1</Caption>I will now ask you about your
        experiences with rainwater drainage around your block. For each
        experience, we want to know in how many months this happened to you
        during the last 12 months. Even if it happened just once during a month,
        we would like to count that month
      </Typography>

      <div>
        <Label number="6.2" required>
          In the last 12 months, in how many months did the drainage box in your
          nighborhood block got obstructed and overflowed?
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
            <Radio {...register(`step25.drainageBoxBlocked`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step25.drainageBoxBlocked" errors={errors} />
      </div>

      <div>
        <Label number="6.3" required>
          If you compare the frequency of obstructed drainage boxes in your
          neighborhood block between April and September 2021 to those in the
          past 6 months, have you noticed any REDUCTIONS?
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
              {...register(`step25.drainageBoxBlockReductions`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step25.drainageBoxBlockReductions"
          errors={errors}
        />
      </div>

      <div>
        <Label number="6.4" required>
          In the last 12 months, how many months did you see that a drainage
          ditch/manhole was left open in your neighborhood block?
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
            <Radio {...register(`step25.drainageDitchBlock`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step25.drainageDitchBlock" errors={errors} />
      </div>

      <div>
        <Label number="6.5" required>
          If you compare the frequency of drainage ditches or manhole being left
          open in your neighborhood block between April and September 2021 to
          those in the past 6 months, have you noticed any REDUCTIONS?
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
              {...register(`step25.drainageDitchBlockReductions`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step25.drainageDitchBlockReductions"
          errors={errors}
        />
      </div>

      <div>
        <Label number="6.6" required>
          In the last 12 months, how many months have you had to walk through
          water?
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
            <Radio {...register(`step25.walkedWater`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step25.walkedWater" errors={errors} />
      </div>

      <div>
        <Label number="6.7" required>
          In the last 12 months, how many months did you get soaked “take a
          shower” because of passing cars?
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
            <Radio {...register(`step25.soakedPassingCar`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step25.soakedPassingCar" errors={errors} />
      </div>

      <div>
        <Label number="6.8" required>
          In the last 12 months, in how many months were you afraid of catching
          a disease because of stagnant water on the street?
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
              {...register(`step25.StagnantWaterDisease`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step25.StagnantWaterDisease" errors={errors} />
      </div>

      <div>
        <Label number="6.9" required>
          If you compare the frequency of water logging and stagnant water in
          your neighborhood block between April and September 2021 to those in
          the past 6 months, have you noticed any REDUCTIONS?
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
              {...register(`step25.StagnantWaterReductions`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step25.StagnantWaterReductions"
          errors={errors}
        />
      </div>

      <div>
        <Label number="6.10" required>
          In the last 12 months, in how many months did your neighborhood
          experience flood after a rain ?
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
            <Radio {...register(`step25.floodAfterRain`)} value={option} />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage name="step25.floodAfterRain" errors={errors} />
      </div>

      <div>
        <Label number="6.11" required>
          If you compare the frequency of floods after a rain in your
          neighborhood block between April and September 2021 to those from
          April this year, have you noticed any REDUCTIONS?
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
              {...register(`step25.floodAfterRainReductions`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step25.floodAfterRainReductions"
          errors={errors}
        />
      </div>
    </div>
  )
}

export default Step25
