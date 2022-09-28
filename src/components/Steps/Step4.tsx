import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step4 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-2`}>Step 4</div>
}

export default Step4
