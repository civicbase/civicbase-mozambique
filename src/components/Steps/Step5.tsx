import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step5 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const winReasons = watch('step5.winReasons')
  const winners2017 = watch('step5.winners2017.party')

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 5</div>
}

export default Step5
