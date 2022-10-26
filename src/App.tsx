import { useEffect, useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PagesLayout from 'layout/Pages'
import validationSchema from './validation'
import Content from 'components/Content'
import Geolocation from 'components/Geolocation'
import useGeolocation from 'hooks/use-geolocation'
import Footer from 'components/Footer'
import Header from 'components/Header'
import useAsync from 'hooks/use-async'
import { createAnswer } from 'services/answer'
import { transform } from 'transform'
import params from 'utils/params'
import { FormValues } from 'types.d'
import { getRandomQVSRSlider, getRandomTreatmentControl } from 'utils/random'
import validator from 'validations'
import { useI18nContext } from 'i18n/i18n-react'
import ODKConfirmation from 'components/ODKConfirmation'
import { getLocalDate } from 'utils/getLocalDate'

const App = () => {
  const { LL } = useI18nContext()
  const [step, setStep] = useState(1)
  const [odkConfirm, setConfirm] = useState(false)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()
  const language = navigator.language.split(/[-_]/)[0]

  const content = useMemo(() => getRandomTreatmentControl(), [])
  const QVSRSliderContent = useMemo(() => getRandomQVSRSlider(), [])

  useEffect(() => {
    console.table([
      { page: [7, 9, 11], content: QVSRSliderContent },
      { page: [5, 15], content: content },
    ])
  }, [])

  const methods = useForm<FormValues>({
    defaultValues: {
      startAt: getLocalDate(),
      step1: {
        language: language === 'pt' ? LL.choices.languages[1]() : LL.choices.languages[0](),
        uniqueId: params.uniqueId,
      },
      step3: {
        waterBill: {
          shareNumber: 0,
        },
      },
      step5: {
        content: content,
      },
      step6: {
        amountPreference: '8500',
        content: QVSRSliderContent,
      },
      step8: {
        pricePreference: '80',
        content: QVSRSliderContent,
      },
      step10: {
        serviceProvider: {
          howMuch: 0,
        },
      },
      step11: {
        pricePreference: '2350',
      },
      step12: {
        content: content,
      },
      step14: {
        share: [{ name: '', relationship: null, closeness: null }],
      },
    },
    resolver: zodResolver(validationSchema(LL)),
  })

  // const values = methods.getValues()
  // const trans = transform(values, LL)

  // console.log('values', trans)

  console.log('errors', methods.formState.errors)

  const handlePrevious = () => {
    if (step > 1) {
      switch (step) {
        case 11:
        case 13:
          const sanitationType = methods.getValues('step2.sanitationType')

          if (sanitationType !== LL.choices.sanitationType[1]()) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }
          break

        case 18:
          const sewerConnection = methods.getValues('step2.sanitationType') === LL.choices.sanitationType[0]()
          if (!sewerConnection) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }

          break
        case 20:
          const contactecSASB = methods.getValues(`step10.serviceProvider.who.SASB`)

          if (!contactecSASB) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }
          break
        default:
          setStep(step - 1)
          break
      }
    }
  }
  const handleNext = () => {
    validator(step, methods, LL).then((isValid) => {
      if (isValid) {
        setStep(step + 1)
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) => {
          const answer = transform(
            {
              ...values,
              geolocation: { latitude, longitude },
            },
            LL,
          )

          // console.log('answer', answer)git

          run(createAnswer(answer))

          setStep(step + 1)
        })}
      >
        <PagesLayout
          content={<Content onNext={handleNext} onPrevious={handlePrevious} step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 22 || step === 23}
              isSubmitStep={step === 22}
              hidePrevious={step === 1 || step === 23}
              isStart={step === 1}
              step={step}
            />
          }
          ODKConfirmation={!odkConfirm && <ODKConfirmation handleConfirm={() => setConfirm(true)} />}
          geolocation={
            (!latitude || !longitude) &&
            odkConfirm && <Geolocation handleShareGeolocation={() => setUserGesture(true)} error={error} />
          }
        />
      </form>
    </FormProvider>
  )
}

export default App
