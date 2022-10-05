import tw from 'twin.macro'
import Button from 'components/Button'
import { useFormContext } from 'react-hook-form'

const Footer = ({
  onPrevious,
  onNext,
  hidePrevious = false,
  hideNext = false,
  isSubmitStep = false,
  step, //temporary
  isStart,
}: {
  onPrevious: () => void
  onNext: () => void
  hidePrevious: boolean
  hideNext: boolean
  isSubmitStep: boolean
  step: number
  isStart?: boolean
}) => {
  const { setValue } = useFormContext()

  return (
    <div
      css={[tw`flex justify-evenly mt-3`, hidePrevious && tw`justify-center`]}
    >
      {!hidePrevious && (
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
      )}

      {!hideNext && (
        <Button variant="primary" onClick={onNext}>
          {isStart ? 'Start Survey' : 'Next'}
        </Button>
      )}

      {isSubmitStep && (
        <Button variant="tertiary" type="submit">
          Submit
        </Button>
      )}

      <div css={tw`absolute bottom-4 right-4`}>{step}</div>
    </div>
  )
}

export default Footer
