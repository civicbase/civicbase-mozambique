import tw from 'twin.macro'
import Steps from 'components/Steps'
import { memo } from 'react'

const Content = ({
  step,
  onNext,
  onPrevious,
}: {
  step: number
  onNext: () => void
  onPrevious: () => void
}) => {
  return (
    <div css={tw`relative mb-8`}>
      <Steps id={step} onNext={onNext} onPrevious={onPrevious} />
    </div>
  )
}

export default memo(Content)
