import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step16 = () => {
  const { register, getValues } = useFormContext()
  const sanitationType = getValues('step2.sanitationType')
  const contactedSASB = getValues('step13.contactedWho.SASB')

  return (
    <div css={tw`grid grid-cols-1 gap-10`}>
      <Heading subtitle="Satisfaction towards SASB's Services" />

      {sanitationType === 'Flush to Sewer' && (
        <>
          <div>
            <Label number="4.41" required>
              Overall, are you satisfied with the quality of your CURRENT sewer
              services?
            </Label>

            <div css={tw`flex justify-between`}>
              {[
                'Satisfied',
                'Somewhat Satisfied',
                'Somewhat Dissatisfied',
                'Dissastisfied',
              ].map(option => (
                <label
                  css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
                  key={option}
                >
                  <span css={tw`text-center text-sm`}>{option}</span>
                  <Radio
                    {...register(`step16.satisfaction.sewer`)}
                    value={option}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label number="4.42" required>
              If you compare the quality of sewer services you received between
              April and September 2021 to the services you received in the last
              6 months, have you noticed any improvements?
            </Label>

            <div css={tw`flex justify-between`}>
              {[
                'No, it has gotten worse',
                'No change',
                'Yes, it has improved',
                `Don't know`,
              ].map(option => (
                <label
                  css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
                  key={option}
                >
                  <span css={tw`text-center text-sm`}>{option}</span>
                  <Radio
                    {...register(`step16.satisfaction.sewerlast6Months`)}
                    value={option}
                  />
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      <div>
        <Label number="4.43" required>
          Overall, are you satisfied with the quality of drainage services by
          SASB in your neighborhood?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'Satisfied',
            'Somewhat Satisfied',
            'Somewhat Dissatisfied',
            'Dissastisfied',
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center text-sm`}>{option}</span>
              <Radio
                {...register(`step16.satisfaction.qualityDrainage`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label number="4.44" required>
          If you compare the quality of drainage services between April and
          September 2021 tothe services in the last 6 months, have you noticed
          any improvements?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'No, it has gotten worse',
            'No change',
            'Yes, it has improved',
            `Don't know`,
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center text-sm`}>{option}</span>
              <Radio
                {...register(`step16.satisfaction.qualityDrainageLast6Months`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      {sanitationType === 'Flush to Septic Tank' && contactedSASB && (
        <>
          <div>
            <Label number="4.45" required>
              Overall, are you satisfied with the quality of SASB fecal sludge
              desludging services?
            </Label>

            <div css={tw`flex justify-between`}>
              {[
                'Satisfied',
                'Somewhat Satisfied',
                'Somewhat Dissatisfied',
                'Dissastisfied',
              ].map(option => (
                <label
                  css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
                  key={option}
                >
                  <span css={tw`text-center text-sm`}>{option}</span>
                  <Radio
                    {...register(
                      `step16.satisfaction.SASBFecalSludgeDeslidgingService`,
                    )}
                    value={option}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label number="4.46" required>
              If you compare the quality of fecal sludge desludging services you
              received between April and September 2021 to the services you
              received in the last 6 months, have you noticed any improvements?
            </Label>

            <div css={tw`flex justify-between`}>
              {[
                'No, it has gotten worse',
                'No change',
                'Yes, it has improved',
                `Don't know`,
                'Not Applicable',
              ].map(option => (
                <label
                  css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
                  key={option}
                >
                  <span css={tw`text-center text-sm`}>{option}</span>
                  <Radio
                    {...register(
                      `step16.satisfaction.qualityFecalSludgeLast6Months`,
                    )}
                    value={option}
                  />
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      <div>
        <Label number="4.47" required>
          Overall, are you satisfied with the quality of SASB customer service
          when responding to your questions, complaints and requests?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'Satisfied',
            'Somewhat Satisfied',
            'Somewhat Dissatisfied',
            'Dissastisfied',
            'Not Applicable',
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center text-sm`}>{option}</span>
              <Radio
                {...register(`step16.satisfaction.SASBCustomerService`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label number="4.48" required>
          If you compare the quality of SASB's CUSTOMER services you received
          between April and September 2021 to the services you received in the
          last 6 months, have you noticed any improvements?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'No, it has gotten worse',
            'No change',
            'Yes, it has improved',
            `Don't know`,
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center text-sm`}>{option}</span>
              <Radio
                {...register(
                  `step16.satisfaction.SASBCustomerServiceLast6Months`,
                )}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label number="4.49" required>
          Overall, are you satisfied with the quality of public service by the
          Municipality of Beira?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'Satisfied',
            'Somewhat Satisfied',
            'Somewhat Dissatisfied',
            'Dissastisfied',
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center text-sm`}>{option}</span>
              <Radio
                {...register(`step16.satisfaction.beiraMunicipality`)}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label number="4.50" required>
          If you compare the quality of Beira Municipality's public services you
          received between April and September 2021 to the services you received
          in the last 6 months, have you noticed any improvements?
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            'No, it has gotten worse',
            'No change',
            'Yes, it has improved',
            `Don't know`,
          ].map(option => (
            <label
              css={tw`flex flex-col space-y-2 items-center select-none mt-5`}
              key={option}
            >
              <span css={tw`text-center text-sm`}>{option}</span>
              <Radio
                {...register(
                  `step16.satisfaction.beiraMunicipalityLast6Months`,
                )}
                value={option}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Step16
