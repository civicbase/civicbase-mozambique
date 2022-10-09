import { useEffect, useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PagesLayout from 'layout/Pages'
import validation from './validation'
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
import {
  manualStep19Validation,
  manualStep20Validation,
} from 'utils/validation'

const App = () => {
  const [step, setStep] = useState(1)
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
      startAt: new Date().toISOString(),
      sewerWillingPay: 0,
      step1: {
        language: language === 'pt' ? 'Português' : 'English',
        uniqueId: params.uniqueId,
      },
      step2: {
        waterBill: {
          shareNumber: 0,
        },
      },
      step5: {
        content: content,
      },
      step7: {
        amountPreference: '8500',
        content: QVSRSliderContent,
      },
      step9: {
        pricePreference: '80',
        content: QVSRSliderContent,
      },
      step11: {
        feePreference: '50',
        content: QVSRSliderContent,
      },
      step14: {
        fsm: {
          tooExpensive: '8700',
          tooCheap: '8700',
          expensive: '8700',
          greatValue: '8700',
        },
      },
      step15: {
        content: content,
      },
      step17: {
        share: [{ name: '', relationship: null, closeness: null }],
      },
    },
    resolver: zodResolver(validation),
  })

  // const values = methods.getValues()

  // console.log('values', values)

  // console.log('errors', methods.formState.errors)

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    if (step === 20) {
      const isValid = manualStep20Validation(methods)

      if (isValid) {
        setStep(step + 1)
      }
    } else if (step === 19) {
      const isValid = manualStep19Validation(methods)

      if (isValid) {
        setStep(step + 1)
      }
    } else {
      methods.trigger(`step${step}` as any).then(isValid => {
        if (isValid) {
          setStep(step + 1)
        }
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          const answer = transform(values)

          console.log('answer', {
            ...answer,
            geolocation: { latitude, longitude },
          })

          run(createAnswer({ ...answer, geolocation: { latitude, longitude } }))
        })}
      >
        <PagesLayout
          content={
            <Content
              onNext={handleNext}
              onPrevious={handlePrevious}
              step={step}
            />
          }
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 28}
              isSubmitStep={step === 28}
              hidePrevious={true}
              isStart={step === 1}
              step={step}
            />
          }
          geolocation={
            (!latitude || !longitude) && (
              <Geolocation
                handleShareGeolocation={() => setUserGesture(true)}
                error={error}
              />
            )
          }
        />
      </form>
    </FormProvider>
  )
}

export default App
