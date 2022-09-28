import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step4 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      <div>
        In response to customer complaints , SASB has implemented a training
        program for its workers to improve service quality since February 2022.
        The program involves
      </div>
      <div>
        <div>1) fixing sewer blockages or bursts in a timely manner</div>
        <div>2) improving drainage conditions in the city</div>
        <div>3) promptly addressing customer complaints and</div>
        <div>
          4) reducing service disruptions. A similar training program has
          improved service reliability by 55 percent and complaints response
          time by 34 percent.
        </div>
      </div>
    </div>
  )
}

export default Step4
