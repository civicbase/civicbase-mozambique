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
import { loadAllLocales } from 'i18n/i18n-util.sync'

interface FormValues {
  language: string
  step1: {
    unique_id: string
    bill: {
      shared: boolean
      month?: string
      consumption?: number
      cost?: number
      sanitation_tax_cost?: number
    }
  }
  step2: {
    dwelling_type: string
    sanitation_type: string
    water_bill: {
      share: string
      share_number?: number
    }
    split?: number
    split_pay?: number
  }
  step3: {
    credits: number
    order: number
    statement: string
    vote: number
  }[]
  step4: {
    show_content: 'A' | 'B'
  }
  step5: {
    is_information_relevant: string
    share_information: string
    share_number: string
    share_0: {
      name: string
      number: string
    }
    share_1: {
      name: string
      number: string
    }
    share_2: {
      name: string
      number: string
    }
    share_3: {
      name: string
      number: string
    }
    share_4: {
      name: string
      number: string
    }
  }
  step6: {
    credits: number
    order: number
    statement: string
    vote: number
  }[]
  step7: {
    amount_preference: string
  }
  step10: {
    credits: number
    order: number
    statement: string
    vote: number
  }[]
  step11: {
    amount_preference: string
  }
  step12: {
    connected_septic_tank: string
    emptied_septic_tank: string
    service_provider: {
      contacted: string
      last_time: string
      contacted_who: string
      requested_service: string
      paid: string
      how_much: number
    }
  }
}

const App = () => {
  const [step, setStep] = useState(1)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()

  const language = navigator.language.split(/[-_]/)[0]

  loadAllLocales()

  const methods = useForm<FormValues>({
    defaultValues: {
      language: language === 'pt' ? 'Português' : 'English',
      step1: {
        unique_id: params.uniqueId,
        bill: {
          shared: false,
          consumption: 0,
          cost: 0,
          sanitation_tax_cost: 0,
        },
      },
      step2: {
        water_bill: {
          share_number: 0,
        },
      },
      step12: {
        service_provider: {
          how_much: 0,
        },
      },
    },
    resolver: zodResolver(validation),
  })

  const handlePrevious = () => {
    if (step > 1) {
      const sanitationType = methods.getValues('step2.sanitation_type')
      if (sanitationType !== 'Flush to Septic Tank' && step === 13) {
        setStep(step - 2)
      } else {
        setStep(step - 1)
      }
    }
  }
  const handleNext = () => {
    methods.trigger(`step${step}` as any).then(isValid => {
      if (isValid) {
        const sanitationType = methods.getValues('step2.sanitation_type')
        if (sanitationType !== 'Flush to Septic Tank' && step + 1 === 12) {
          setStep(step + 2)
        } else {
          setStep(step + 1)
        }
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
          content={<Content step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 28}
              isSubmitStep={step === 28}
              hidePrevious={
                step === 1 ||
                step === 3 ||
                step === 4 ||
                step === 5 ||
                step === 6 ||
                step === 7
              }
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
