import Conjoint from 'methods/Conjoint'
import Likert from 'methods/Likert'
import Quadratic from 'methods/Quadratic'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

const Step11 = () => {
  const { getValues } = useFormContext()

  const x = getValues('test')

  switch (x) {
    case 'a':
      return <Quadratic qs={[]} step="step11" />
    case 'b':
      return <Conjoint qs={[]} step="step11" />
    case 'c':
      return <Likert qs={[]} step="step11" />
    default:
      return <Quadratic qs={[]} step="step11" />
  }
}

export default memo(Step11)
