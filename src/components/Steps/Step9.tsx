import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'

const Step9 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 9</div>
}

export default Step9
