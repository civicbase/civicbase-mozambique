import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import * as Section from '.'

type StepsProps = {
  id: number
  onNext: () => void
  onPrevious: () => void
}

const Steps = ({ id, onNext, onPrevious }: StepsProps) => {
  const { LL } = useI18nContext()
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
      onNext()
      return <></>
    case 7:
      return <Section.Step7 />
    case 8:
      return <Section.Step8 />
    case 9:
      return <Section.Step9 />
    case 10:
      return <Section.Step10 />
    case 11:
      onNext()
      return <></>
    case 12:
      onNext()
      return <></>
    case 13:
      if (sanitationType === LL.choices.sanitationType[1]()) {
        return <Section.Step13 />
      } else {
        onNext()
        return null
      }
    case 14:
      onNext()
      return <></>
    case 15:
      return <Section.Step15 />
    case 16:
      return <Section.Step16 />
    case 17:
      return <Section.Step17 />
    case 18:
      return <Section.Step18 />
    case 19:
      return <Section.Step19 />
    case 20: {
      const sewerConnection = getValues('step2.sanitationType') === LL.choices.sanitationType[0]()

      if (sewerConnection) {
        return <Section.Step20 />
      } else {
        onNext()
        return null
      }
    }
    case 21:
      return <Section.Step21 />
    case 22:
      onNext()
      return <></>
    case 23: {
      const contactecSASB = getValues(`step13.serviceProvider.who.SASB`)

      if (contactecSASB) {
        return <Section.Step23 />
      } else {
        onNext()
        return null
      }
    }
    case 24:
      onNext()
      return <></>
    case 25:
      return <Section.Step25 />
    case 26:
      return <Section.Step26 />
    case 27:
      return <Section.Step27 />
    case 28:
      return <Section.Completion />

    default:
      return <div>Error</div>
  }
}

export default Steps
