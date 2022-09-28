import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step6 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const lossreasons = watch('step6.lossReason')
  const party = watch('step6.firstRunnersAssemblyElections.party')

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 6</div>
}

export default Step6
