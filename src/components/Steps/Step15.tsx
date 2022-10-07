import Typography from 'components/Typography'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step15 = () => {
  const { setValue } = useFormContext()

  const isHeads = Math.random() < 0.5

  setValue('step15.showContent', isHeads ? 'A' : 'B')

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      {isHeads && (
        <Typography>
          As I mentioned earlier, in my personal opinion, SASB have been doing a
          good job! They have also implemented a spacial training program to
          improve performance of its workers. This innovative training program
          has improved service reliability and coplaints response previously in
          another county
        </Typography>
      )}
      {!isHeads && (
        <Typography>
          As I mentioned earlier, in my personal opinion, SASB have been doing a
          good job!
        </Typography>
      )}
    </div>
  )
}

export default Step15
