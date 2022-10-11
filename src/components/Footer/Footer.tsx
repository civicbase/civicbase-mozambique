import tw from 'twin.macro'
import Button from 'components/Button'
import { useFormContext } from 'react-hook-form'
import { useI18nContext } from 'i18n/i18n-react'

const Footer = ({
  onPrevious,
  onNext,
  hidePrevious = false,
  hideNext = false,
  isSubmitStep = false,
  step,
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
  const { LL } = useI18nContext()
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <div
      css={[tw`flex justify-evenly mt-3`, hidePrevious && tw`justify-center`]}
    >
      {!hidePrevious && (
        <Button variant="secondary" onClick={onPrevious}>
          {LL.actions.previous()}
        </Button>
      )}

      {!hideNext && (
        <Button variant="primary" onClick={onNext}>
          {isStart ? LL.actions.startSurvey() : LL.actions.next()}
        </Button>
      )}

      {isSubmitStep && (
        <Button variant="tertiary" type="submit">
          {LL.actions.submit()}
        </Button>
      )}

      <div
        css={[
          tw`absolute bottom-4 right-4`,
          errors[`step${step}`] && tw`text-red-600`,
        ]}
      >
        {step}
      </div>
    </div>
  )
}

export default Footer
