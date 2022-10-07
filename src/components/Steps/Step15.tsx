import Typography, { Caption } from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step15 = () => {
  const { getValues } = useFormContext()
  const content = getValues('step15.showContent')

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      {content === 'A' && (
        <Typography>
          <Caption css={tw`mr-3`}>4.39</Caption>As I mentioned earlier, in my
          personal opinion, SASB have been doing a good job! They have also
          implemented a spacial training program to improve performance of its
          workers. This innovative training program has improved service
          reliability and coplaints response previously in another county
        </Typography>
      )}
      {content === 'B' && (
        <Typography>
          <Caption css={tw`mr-3`}>4.40</Caption>As I mentioned earlier, in my
          personal opinion, SASB have been doing a good job!
        </Typography>
      )}
    </div>
  )
}

export default Step15
