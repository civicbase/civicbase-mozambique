import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

const Step11 = () => {
  const { getValues } = useFormContext()

  return <div>step 11</div>
}

export default memo(Step11)
