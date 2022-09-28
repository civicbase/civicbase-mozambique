import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'

const Step8 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 8</div>
}

export default Step8
