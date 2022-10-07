import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step14 = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const tooExpensive = watch('step14.fsm.tooExpensive')
  const tooCheap = watch('step14.fsm.tooCheap')
  const expensive = watch('step14.fsm.expensive')
  const greatValue = watch('step14.fsm.greatValue')

  console.log('tooExpensive', typeof tooExpensive)

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Currently, SASB offers the service to remove the fecal sludge and clean
        your septic tank for a total of 8700MT.
      </Typography>

      <div>
        <Label number="4.35" required>
          At what price would you consider that the FSM collection fee will be
          TOO EXPENSIVE that you would not consider paying for the service?
        </Label>

        <div css={tw`mt-10`}>
          <Label>${tooExpensive}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.tooExpensive`)}
          />
          <FieldErrorMessage name="step14.fsm.tooExpensive" errors={errors} />
        </div>
      </div>

      <div>
        <Label number="4.36" required>
          At what price would you do you think that the FSM collection fee is
          TOO LOW that you think the service quality will be bad?
        </Label>

        <div css={tw`mt-10`}>
          <Label>${tooCheap}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.tooCheap`)}
          />
          <FieldErrorMessage name="step14.fsm.tooCheap" errors={errors} />
        </div>
      </div>

      <div>
        <Label number="4.37" required>
          At what price would you consider the FSM collection fee starting to
          become expensive, but you would give it some thought before ordering?
        </Label>

        <div css={tw`mt-10`}>
          <Label>${expensive}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.expensive`)}
          />
          <FieldErrorMessage name="step14.fsm.expensive" errors={errors} />
        </div>
      </div>

      <div>
        <Label number="4.38" required>
          At what price would you consider the FSM collection fee to a bargain
          or great value for money?
        </Label>

        <div css={tw`mt-10`}>
          <Label>${greatValue}</Label>
          <input
            type="range"
            css={tw`appearance-none w-full h-1.5 p-0 bg-brand bg-opacity-25 border-radius[8px] focus:outline-none focus:ring-0 focus:shadow-none`}
            min="6900"
            max="10400"
            step="100"
            {...register(`step14.fsm.greatValue`)}
          />
          <FieldErrorMessage name="step14.fsm.greatValue" errors={errors} />
        </div>
      </div>
    </div>
  )
}

export default Step14
