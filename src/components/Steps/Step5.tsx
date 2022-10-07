import Typography, { Caption } from 'components/Typography'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step5 = () => {
  const { getValues } = useFormContext()

  const content = getValues('step5.showContent')

  return (
    <div>
      {content === 'A' && (
        <div css={tw`grid grid-cols-1 gap-2`}>
          <Typography css={tw`text-justify`}>
            <Caption css={tw`mr-3`}>4.9</Caption> I've been thinking about how
            the utility SASB has been managing sanitation services. And though I
            don't know much about sanitation, in my personal opinion, they've
            been doing a good job
          </Typography>

          <Typography css={tw`text-justify`}>
            And in order to improve service quality, SASB has implemented an
            innovative new training program for its workers since February 2022.
            The program involves
          </Typography>

          <div>
            <Typography css={tw`text-justify`}>
              1) quickly fixing sewer blockages or bursts
            </Typography>
            <Typography css={tw`text-justify`}>
              2) improving drainage
            </Typography>
            <Typography css={tw`text-justify`}>
              3) promptly addressing customer complaints and
            </Typography>
            <Typography css={tw`text-justify`}>
              4) reducing service disruptions. This innovative training program
              has improved service reliability by 55 percent and complaints
              response time by 34 percent in another country.
            </Typography>
          </div>
        </div>
      )}
      {content === 'B' && (
        <Typography css={tw`text-justify`}>
          <Caption css={tw`mr-3`}>4.10</Caption>I've been thinking about how the
          utility SASB has been managing sanitation services. And though I don't
          know much about sanitation, in my personal opinion, they've been doing
          a good job
        </Typography>
      )}
    </div>
  )
}

export default memo(Step5)
