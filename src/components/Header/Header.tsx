import { Subtitle } from 'components/Typography'
import tw from 'twin.macro'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div css={tw`text-center flex`}>
      <div>
        <img src={logo} width={50} alt="logo" />
      </div>
      <Subtitle>
        FLL Training Project for SASB, Beira, Mozambique - Household Survey
      </Subtitle>
    </div>
  )
}

export default Header
