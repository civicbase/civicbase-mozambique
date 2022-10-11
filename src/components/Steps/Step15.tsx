import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step15 = () => {
  const { LL } = useI18nContext()
  const { getValues } = useFormContext()
  const content = getValues('step15.content')

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      <Heading subtitle={LL.headings[15]()} />

      {content === 'Treatment' && (
        <Typography>
          <Caption css={tw`mr-3`}>4.39 Treatment</Caption>
          {LL.questions[439]()}
        </Typography>
      )}
      {content === 'Control' && (
        <Typography>
          <Caption css={tw`mr-3`}>4.40 Control</Caption>
          {LL.questions[440]()}
        </Typography>
      )}
    </div>
  )
}

export default Step15
