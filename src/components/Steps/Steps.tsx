import { useI18nContext } from 'i18n/i18n-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { getMostVoted } from 'utils/quadratic'
import * as Section from '.'

type StepsProps = {
  id: number
  onNext: () => void
  onPrevious: () => void
}

const Steps = ({ id, onNext, onPrevious }: StepsProps) => {
  const { LL } = useI18nContext()
  const { getValues, setValue } = useFormContext()
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
    case 9: {
      const revise = getValues('step8.revisePrice') !== LL.choices.revise[1]()

      if (!revise) {
        const content = getValues('step7.content')

        if (content === 'Treatment - QVSR') {
          const quadratic = getValues('step7.QVSR')
          const mostVoted = getMostVoted(quadratic)

          if (mostVoted) {
            const value = mostVoted.statement.match(/\d+/)

            if (value && value[0]) {
              setValue('step8.willingPay', Number(value[0]))
            }
          }
        } else {
          const value = getValues('step7.amountPreference')

          setValue('step8.willingPay', Number(value))
        }
      }

      return <Section.Step9 />
    }
    case 10:
      return <Section.Step10 />
    case 11: {
      const revise = getValues('step10.revisePrice') !== LL.choices.revise[1]()

      if (!revise) {
        const content = getValues('step9.content')

        if (content === 'Treatment - QVSR') {
          const quadratic = getValues('step9.QVSR')
          const mostVoted = getMostVoted(quadratic)

          if (mostVoted) {
            const value = mostVoted.statement.match(/\d+/)

            if (value && value[0]) {
              setValue('step10.willingPay', Number(value[0]))
            }
          }
        } else {
          const value = getValues('step9.pricePreference')

          setValue('step10.willingPay', Number(value))
        }
      }

      return <Section.Step11 />
    }
    case 12:
      return <Section.Step12 />
    case 13:
      if (sanitationType === LL.choices.sanitationType[1]()) {
        return <Section.Step13 />
      } else {
        onNext()
        return null
      }
    case 14:
      if (sanitationType === LL.choices.sanitationType[1]()) {
        return <Section.Step14 />
      } else {
        onNext()
        return null
      }
    case 15: {
      const revise = getValues('step12.revisePrice') !== LL.choices.revise[1]()

      if (!revise) {
        const content = getValues('step11.content')

        if (content === 'Treatment - QVSR') {
          const quadratic = getValues('step11.QVSR')
          const mostVoted = getMostVoted(quadratic)

          if (mostVoted) {
            const value = mostVoted.statement.match(/\d+/)

            if (value && value[0]) {
              setValue('step12.willingPay', Number(value[0]))
            }
          }
        } else {
          const value = getValues('step11.feePreference')

          setValue('step12.willingPay', Number(value))
        }
      }

      return <Section.Step15 />
    }
    case 16:
      return <Section.Step16 />
    case 17:
      return <Section.Step17 />
    case 18:
      return <Section.Step18 />
    case 19:
      return <Section.Step19 />
    case 20: {
      const sewerConnection =
        getValues('step2.sanitationType') === LL.choices.sanitationType[0]()

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
      return <Section.Step22 />
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
      const contactecSASB = getValues(`step13.serviceProvider.who.SASB`)

      if (contactecSASB) {
        return <Section.Step24 />
      } else {
        onNext()
        return null
      }
    case 25:
      return <Section.Step25 />
    case 26:
      return <Section.Step26 />
    case 27:
      setValue('finishAt', new Date().toISOString())
      return <Section.Step27 />
    case 28:
      return <Section.Completion />

    default:
      return <div>Error</div>
  }
}

export default Steps
