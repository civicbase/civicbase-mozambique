import Typography from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import tw, { theme } from 'twin.macro'

const Completion = () => {
  const { LL } = useI18nContext()

  return (
    <div css={tw`flex flex-col h-full`}>
      <Typography css={tw`text-center`}>
        {LL.placeholder.completion()}
      </Typography>

      <div css={tw`flex-1 flex justify-center h-full items-center`}>
        <AiOutlineCheckCircle size={200} color={theme`colors.green.400`} />
      </div>
    </div>
  )
}

export default Completion
