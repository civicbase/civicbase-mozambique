import tw from 'twin.macro'
import Button from 'components/Button'
import { Subtitle } from 'components/Typography'
import locationImage from '../../images/location.png'
import { useI18nContext } from 'i18n/i18n-react'

type GeolocationMessageProps = {
  error?: GeolocationPositionError
  handleShareGeolocation: () => void
}

const GeolocationMessage = ({ error, handleShareGeolocation }: GeolocationMessageProps) => {
  const { LL } = useI18nContext()

  return (
    <div
      css={tw`backdrop-blur-3xl absolute w-full h-full left-0 bg-white bg-opacity-90 flex justify-center items-center flex-col z-50`}
    >
      <div css={tw`text-center absolute top-10 mx-10`}>
        <div css={tw`flex justify-center -mt-10`}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo2.svg`} width={250} alt="logo" />
        </div>
        <Subtitle>FLL Training Project for SASB, Beira, Mozambique - Household Survey</Subtitle>
      </div>
      <img src={locationImage} alt="location" />
      <Button type="button" variant="primary" onClick={handleShareGeolocation} css={tw`flex items-center`}>
        {LL.actions.enableLocation()}
      </Button>
      {error && <div>Reason: {error.message}</div>}
    </div>
  )
}

export default GeolocationMessage
