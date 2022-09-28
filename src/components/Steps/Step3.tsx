import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 3</div>
}

export default Step3
