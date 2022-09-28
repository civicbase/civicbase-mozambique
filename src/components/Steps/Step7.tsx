import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step7 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 7</div>
}

export default Step7
