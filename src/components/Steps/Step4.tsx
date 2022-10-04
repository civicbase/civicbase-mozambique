import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step4 = () => {
  const { setValue } = useFormContext()

  const isHeads = Math.random() < 0.5

  setValue('step4.show_content', isHeads ? 'A' : 'B')

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      {isHeads && (
        <>
          <div>
            In response to customer complaints , SASB has implemented a training
            program for its workers to improve service quality since February
            2022. The program involves
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
        </>
      )}
      {!isHeads && (
        <div>
          So I've been thinking about the current conditions of City and how the
          City Government has been dealing with everything and while I don't
          really know how great they have been doing, in my personal opinion, I
          really like them.
        </div>
      )}
    </div>
  )
}

export default Step4
