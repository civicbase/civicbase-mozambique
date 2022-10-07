import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import * as Section from '.'

type StepsProps = {
  id: number
  onNext: () => void
  onPrevious: () => void
}

const Steps = ({ id, onNext, onPrevious }: StepsProps) => {
  const { getValues } = useFormContext()
  const sanitationType = getValues('step2.sanitationType')

  useEffect(() => {
    const body = document.querySelector('#content')

    if (body) {
      body.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [id])

  switch (id) {
    case 1:
      return <Section.Step1 />
    case 2:
      return <Section.Step2 />
    case 3:
      return <Section.Step3 />
    case 4:
      return <Section.Step4 />
    case 5:
      return <Section.Step5 />
    case 6:
      return <Section.Step6 />
    case 7:
      return <Section.Step7 />
    case 8:
      return <Section.Step8 />
    case 9:
      return <Section.Step9 />
    case 10:
      return <Section.Step10 />
    case 11:
      return <Section.Step11 />
    case 12:
      return <Section.Step12 />
    case 13:
      if (sanitationType === 'Flush to Septic Tank') {
        return <Section.Step13 />
      } else {
        onNext()
        return null
      }
    case 14:
      if (sanitationType === 'Flush to Septic Tank') {
        return <Section.Step14 />
      } else {
        onNext()
        return null
      }
    case 15:
      return <Section.Step15 />
    case 16:
      if (sanitationType === 'Flush to Sewer') {
        return <Section.Step16 />
      } else {
        onNext()
        return null
      }

    // case 17:
    //   return <Section.Step17 />
    // case 18:
    //   return <Section.Step18 />
    // case 19:
    //   return <Section.Step19 />
    // case 20:
    //   return <Section.Step20 />
    // case 21:
    //   return <Section.Step21 />
    // case 22:
    //   return <Section.Step22 />
    // case 23:
    //   return <Section.Step23 />
    // case 24:
    //   return <Section.Step24 />
    // case 25:
    //   return <Section.Step25 />
    // case 26:
    //   return <Section.Step26 />
    // case 27:
    //   return <Section.Step27 />
    // case 28:
    //   return <Section.Step28 />

    default:
      return <div>Error</div>
  }
}

export default Steps
