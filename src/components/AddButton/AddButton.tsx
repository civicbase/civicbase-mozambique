import { ButtonHTMLAttributes, ReactNode } from 'react'
import tw from 'twin.macro'
import Typography, { Title } from 'components/Typography'

const AddButton = ({
  children,
  ...props
}: {
  children: string | ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      css={[
        tw`transition-all ease-in-out duration-300`,
        tw`w-full h-10 border-dashed border-2 rounded-md text-gray-500`,
        tw`flex justify-center items-center`,
        !props?.disabled &&
          tw`hover:border-gray-600 hover:text-gray-900 focus:outline-none`,
      ]}
      {...props}
      type="button"
    >
      <div>{children}</div>
    </button>
  )
}

export default AddButton
