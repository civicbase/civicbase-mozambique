import tw from 'twin.macro'

const Heading = ({
  title,
  subtitle,
}: {
  title?: string
  subtitle?: string
}) => {
  return (
    <div css={tw`flex flex-col items-center`}>
      {title && <span css={tw`text-xl`}>{title}</span>}
      {subtitle && <span css={tw`text-lg text-gray-500`}>{subtitle}</span>}
    </div>
  )
}

export default Heading
