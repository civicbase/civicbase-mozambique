import { useState } from 'react'
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

const App = () => {
  const [step, setStep] = useState(1)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()
  const language = navigator.language.split(/[-_]/)[0]

  const methods = useForm<FormValues>({
    defaultValues: {
      date: new Date().toISOString(),
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
        content: Math.random() < 0.5 ? 'Treatment' : 'Control',
      },
      step7: {
        amountPreference: '8500',
        content:
          Math.random() < 0.5 ? 'Treatment - QVSR' : 'Control - Price Slider',
      },
      step9: {
        pricePreference: '80',
        content:
          Math.random() < 0.5 ? 'Treatment - QVSR' : 'Control - Price Slider',
      },
      step11: {
        feePreference: '50',
        content:
          Math.random() < 0.5 ? 'Treatment - QVSR' : 'Control - Price Slider',
      },
      step14: {
        SASBService: '8700',
        fsm: {
          tooExpensive: '8700',
          tooCheap: '8700',
          expensive: '8700',
          greatValue: '8700',
        },
      },
      step15: {
        content: Math.random() < 0.5 ? 'Treatment' : 'Control',
      },
      step17: {
        share: [{ name: '', relationship: null, closeness: null }],
      },
    },
    resolver: zodResolver(validation),
  })

  const content5 = methods.getValues('step5.content')
  const content7 = methods.getValues('step7.content')
  const content9 = methods.getValues('step9.content')
  const content11 = methods.getValues('step11.content')
  const content15 = methods.getValues('step15.content')

  console.table([
    { page: 5, content: content5 },
    { page: 7, content: content7 },
    { page: 9, content: content9 },
    { page: 11, content: content11 },
    { page: 15, content: content15 },
  ])

  console.log('errors', methods.formState.errors)

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    methods.trigger(`step${step}` as any).then(isValid => {
      if (isValid) {
        setStep(step + 1)
      }
    })
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
