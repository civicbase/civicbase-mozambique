import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Typography from 'components/Typography'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step13 = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const tooExpensive = watch('step13.fsm.too_expensive')
  const tooCheap = watch('step13.fsm.too_cheap')
  const expensive = watch('step13.fsm.expensive')
  const greatValue = watch('step13.fsm.great_value')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>
          At what price would you consider that the FSM collection fee will be
          TOO EXPENSIVE that you would not consider paying for the service? (Too
          Expensive)
        </Label>

        <Typography css={tw`my-2`}>Use SASB price as anchor</Typography>

        <div css={tw`mt-10`}>
          <Label>${tooExpensive}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="0"
            max="100"
            step="5"
            {...register(`step13.fsm.too_expensive`)}
          />
          <FieldErrorMessage name="step13.fsm.too_expensive" errors={errors} />
        </div>
      </div>

      <div>
        <Label required>
          At what price would you do you think that the FSM collection fee is
          TOO LOW that you think the service quality will be bad ? (Too cheap)
        </Label>

        <Typography css={tw`my-2`}>Use SASB price as anchor</Typography>

        <div css={tw`mt-10`}>
          <Label>${tooCheap}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="0"
            max="100"
            step="5"
            {...register(`step13.fsm.too_cheap`)}
          />
          <FieldErrorMessage name="step13.fsm.too_cheap" errors={errors} />
        </div>
      </div>

      <div>
        <Label required>
          At what price would you consider the FSM collection fee starting to
          become expensive, but you would give it some thought before ordering?
          (Expensive)
        </Label>

        <Typography css={tw`my-2`}>Use SASB price as anchor</Typography>

        <div css={tw`mt-10`}>
          <Label>${expensive}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="0"
            max="100"
            step="5"
            {...register(`step13.fsm.expensive`)}
          />
          <FieldErrorMessage name="step13.fsm.expensive" errors={errors} />
        </div>
      </div>

      <div>
        <Label required>
          At what price would you consider the FSM collection fee to a bargain
          or great value for money?
        </Label>

        <Typography css={tw`my-2`}>Use SASB price as anchor</Typography>

        <div css={tw`mt-10`}>
          <Label>${greatValue}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="0"
            max="100"
            step="5"
            {...register(`step13.fsm.great_value`)}
          />
          <FieldErrorMessage name="step13.fsm.great_value" errors={errors} />
        </div>
      </div>
    </div>
  )
}

export default Step13
