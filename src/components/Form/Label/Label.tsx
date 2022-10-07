import { Caption } from 'components/Typography'
import tw from 'twin.macro'

const Label = ({
  children,
  required,
  number,
  ...props
}: {
  children: any
  number?: string
  required?: boolean
}) => {
  return (
    <label
      css={tw`block text-justify font-semibold text-gray-900 text-sm my-1.5 dark:(text-gray-300)`}
      {...props}
    >
      {number && <Caption css={tw`mr-3`}>{number}</Caption>}
      {children}
      {required && <label css={tw`text-red-400 ml-1`}>*</label>}
    </label>
  )
}
export default Label
