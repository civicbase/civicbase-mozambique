import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'

const Step2 = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-6`}>Step 2</div>
}

export default Step2
