import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step18 = () => {
  const {} = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Typography>
        As a reminder, in response to customer complaints in the past, SASB has
        decided to improve the quality of their services including their sewer
        service, septic tank deslduging, drainage and customer service. To
        achive this, they have successfully implemented a training program for
        its workers since February 2022. Ultimately, their vision is to improve
        YOUR satisfaction as a customer. They want us to tell you that your
        satisfaction will be their guarentee!
      </Typography>
    </div>
  )
}

export default Step18
