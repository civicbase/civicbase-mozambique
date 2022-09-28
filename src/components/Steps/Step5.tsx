import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step5 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      So I've been thinking about the current conditions of City and how the
      City Government has been dealing with everything and while I don't really
      know how great they have been doing, in my personal opinion, I really like
      them.
    </div>
  )
}

export default Step5
