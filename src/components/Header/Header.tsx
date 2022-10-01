import { Subtitle } from 'components/Typography'
import tw from 'twin.macro'

const Header = () => {
  return (
    <div css={tw`text-center flex`}>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          width={50}
          alt="logo"
        />
      </div>
      <Subtitle>
        LL Training Project for SASB, Beira, Mozambique - Household Survey
      </Subtitle>
    </div>
  )
}

export default Header
