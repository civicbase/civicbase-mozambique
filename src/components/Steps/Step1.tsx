import { useFormContext } from 'react-hook-form'

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return <div>Step 1</div>
}

export default Step1
