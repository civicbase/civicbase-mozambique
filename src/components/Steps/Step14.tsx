import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step14 = () => {
  const {} = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        Now we would like to share with you what your community thinks about the
        price to be paid for the following services{' '}
      </Typography>

      <Typography>Community price</Typography>
    </div>
  )
}

export default Step14
