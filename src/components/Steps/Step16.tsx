import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Heading from 'components/Heading'
import { useI18nContext } from 'i18n/i18n-react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step16 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext()
  const sanitationType = getValues('step2.sanitationType')
  const contactedSASB = getValues('step13.serviceProvider.who.SASB')
  const emptiedSepticTank =
    getValues('step13.emptiedSepticTank') === LL.choices.yesNo[0]()
  const contactedServiceProvider =
    getValues('step13.serviceProvider.contacted') === LL.choices.yesNo[0]()

  if (
    !(
      sanitationType === LL.choices.sanitationType[1]() &&
      emptiedSepticTank &&
      contactedServiceProvider &&
      contactedSASB
    )
  ) {
    // BUG :(
    setValue(`step16.satisfaction.SASBFecalSludgeDeslidgingService`, '')
    setValue(`step16.satisfaction.qualityFecalSludgeLast6Months`, '')
  }

  return (
    <div css={tw`grid grid-cols-1 gap-10`}>
      <Heading subtitle={LL.headings[16]()} />

      {sanitationType === LL.choices.sanitationType[0]() && (
        <>
          <div>
            <Label number="4.41" required>
              {LL.questions[441]()}
            </Label>

            <div css={tw`flex justify-between`}>
              {[
                LL.choices.satisfactionLevel[0](),
                LL.choices.satisfactionLevel[1](),
                LL.choices.satisfactionLevel[2](),
                LL.choices.satisfactionLevel[3](),
              ].map(option => (
                <label
                  css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

            <FieldErrorMessage
              name="step16.satisfaction.sewer"
              errors={errors}
            />
          </div>

          <div>
            <Label number="4.42" required>
              {LL.questions[442]()}
            </Label>

            <div css={tw`flex justify-between`}>
              {[
                LL.choices.satisfaction[0](),
                LL.choices.satisfaction[1](),
                LL.choices.satisfaction[2](),
                LL.choices.satisfaction[3](),
              ].map(option => (
                <label
                  css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

            <FieldErrorMessage
              name="step16.satisfaction.sewerlast6Months"
              errors={errors}
            />
          </div>
        </>
      )}

      <div>
        <Label number="4.43" required>
          {LL.questions[443]()}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.satisfy[0](),
            LL.choices.satisfy[1](),
            LL.choices.satisfy[2](),
            LL.choices.satisfy[3](),
          ].map(option => (
            <label
              css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

        <FieldErrorMessage
          name="step16.satisfaction.qualityDrainage"
          errors={errors}
        />
      </div>

      <div>
        <Label number="4.44" required>
          {LL.questions[444]()}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.satisfaction[0](),
            LL.choices.satisfaction[1](),
            LL.choices.satisfaction[2](),
            LL.choices.satisfaction[3](),
          ].map(option => (
            <label
              css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

        <FieldErrorMessage
          name="step16.satisfaction.qualityDrainageLast6Months"
          errors={errors}
        />
      </div>

      {sanitationType === LL.choices.sanitationType[1]() &&
        emptiedSepticTank &&
        contactedServiceProvider &&
        contactedSASB && (
          <>
            <div>
              <Label number="4.45" required>
                {LL.questions[445]()}
              </Label>

              <div css={tw`flex justify-between`}>
                {[
                  LL.choices.satisfy[0](),
                  LL.choices.satisfy[1](),
                  LL.choices.satisfy[2](),
                  LL.choices.satisfy[3](),
                ].map(option => (
                  <label
                    css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

              <FieldErrorMessage
                name="step16.satisfaction.SASBFecalSludgeDeslidgingService"
                errors={errors}
              />
            </div>

            <div>
              <Label number="4.46" required>
                {LL.questions[446]()}
              </Label>

              <div css={tw`flex justify-between`}>
                {[
                  LL.choices.satisfaction[0](),
                  LL.choices.satisfaction[1](),
                  LL.choices.satisfaction[2](),
                  LL.choices.satisfaction[3](),
                  LL.choices.notAplicable(),
                ].map(option => (
                  <label
                    css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

              <FieldErrorMessage
                name="step16.satisfaction.qualityFecalSludgeLast6Months"
                errors={errors}
              />
            </div>
          </>
        )}

      <div>
        <Label number="4.47" required>
          {LL.questions[447]()}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.satisfactionLevel[0](),
            LL.choices.satisfactionLevel[1](),
            LL.choices.satisfactionLevel[2](),
            LL.choices.satisfactionLevel[3](),
            LL.choices.notAplicable(),
          ].map(option => (
            <label
              css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

        <FieldErrorMessage
          name="step16.satisfaction.SASBCustomerService"
          errors={errors}
        />
      </div>

      <div>
        <Label number="4.48" required>
          {LL.questions[448]()}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.satisfaction[0](),
            LL.choices.satisfaction[1](),
            LL.choices.satisfaction[2](),
            LL.choices.satisfaction[3](),
          ].map(option => (
            <label
              css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

        <FieldErrorMessage
          name="step16.satisfaction.SASBCustomerServiceLast6Months"
          errors={errors}
        />
      </div>

      <div>
        <Label number="4.49" required>
          {LL.questions[449]()}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.satisfactionLevel[0](),
            LL.choices.satisfactionLevel[1](),
            LL.choices.satisfactionLevel[2](),
            LL.choices.satisfactionLevel[3](),
          ].map(option => (
            <label
              css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

        <FieldErrorMessage
          name="step16.satisfaction.beiraMunicipality"
          errors={errors}
        />
      </div>

      <div>
        <Label number="4.50" required>
          {LL.questions[450]()}
        </Label>

        <div css={tw`flex justify-between`}>
          {[
            LL.choices.satisfaction[0](),
            LL.choices.satisfaction[1](),
            LL.choices.satisfaction[2](),
            LL.choices.satisfaction[3](),
          ].map(option => (
            <label
              css={tw`flex flex-col justify-between space-y-2 items-center select-none mt-5`}
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

        <FieldErrorMessage
          name="step16.satisfaction.beiraMunicipalityLast6Months"
          errors={errors}
        />
      </div>
    </div>
  )
}

export default Step16
