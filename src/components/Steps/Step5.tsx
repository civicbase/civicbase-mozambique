import Heading from 'components/Heading'
import Typography, { Caption } from 'components/Typography'
import { useI18nContext } from 'i18n/i18n-react'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step5 = () => {
  const { getValues } = useFormContext()
  const { LL } = useI18nContext()

  const content = getValues('step5.content')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[5]()} />

      {content === 'Treatment' && (
        <div css={tw`grid grid-cols-1 gap-2`}>
          <Typography css={tw`text-justify`}>
            <Caption css={tw`mr-3`}>4.9 Treatment</Caption>
            {LL.questions[49].paragraph1()}
          </Typography>

          <Typography css={tw`text-justify`}>
            {LL.questions[49].paragraph2()}
          </Typography>

          <div>
            <Typography css={tw`text-justify`}>
              1) {LL.questions[49].paragraph3()}
            </Typography>
            <Typography css={tw`text-justify`}>
              2) {LL.questions[49].paragraph4()}
            </Typography>
            <Typography css={tw`text-justify`}>
              3) {LL.questions[49].paragraph5()}
            </Typography>
            <Typography css={tw`text-justify`}>
              4) {LL.questions[49].paragraph6()}
            </Typography>
          </div>

          <Typography css={tw`text-justify`}>
            {LL.questions[49].paragraph7()}
          </Typography>
        </div>
      )}
      {content === 'Control' && (
        <Typography css={tw`text-justify`}>
          <Caption css={tw`mr-3`}>4.10 Control</Caption>
          {LL.questions[410]()}
        </Typography>
      )}
    </div>
  )
}

export default memo(Step5)
