import tw from 'twin.macro'

const Label = ({
  children,
  required,
  ...props
}: {
  children: any
  required?: boolean
}) => {
  return (
    <label
      css={tw`block font-semibold text-gray-900 text-sm my-1.5 dark:(text-gray-300)`}
      {...props}
    >
      {children}
      {required && <label css={tw`text-red-400 ml-1`}>*</label>}
    </label>
  )
}
export default Label
