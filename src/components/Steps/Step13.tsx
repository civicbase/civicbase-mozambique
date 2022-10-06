import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Typography from 'components/Typography'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step13 = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const contacted = watch('step13.contactedServiceProvider')
  const contactedOther = watch('step13.contactedWho.Other')
  const contactedSASB = watch('step13.contactedWho.SASB')
  const paid = watch('step13.paidService')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label number="4.25" required>
          Since April 2021, have you ever emptied your septic tank ?
        </Label>
        <Controller
          name="step13.emptiedSepticTank"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step13?.emptiedSepticTank}
            />
          )}
        />
        <FieldErrorMessage name="step13.emptiedSepticTank" errors={errors} />
      </div>

      <div>
        <Label number="4.26" required>
          Did you contact a service provider to empty the cesspool?
        </Label>
        <Controller
          name="step13.contactedServiceProvider"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step13?.contactedServiceProvider}
            />
          )}
        />
        <FieldErrorMessage
          name="step13.contactedServiceProvider"
          errors={errors}
        />
      </div>

      {contacted === 'Yes' && (
        <>
          <div>
            <Label number="4.27" required>
              When was the last time you contacted someone to empty the
              cesspool?
            </Label>
            <Typography>TODO: Month - Year</Typography>
            {/* <Controller
          name="step13.service_provider.contacted"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step13?.service_provider?.contacted}
            />
          )}
        /> */}
            <FieldErrorMessage
              name="step13.lastTimeContacted"
              errors={errors}
            />
          </div>

          <div>
            <Label number="4.28" required>
              Who did you contact?
            </Label>

            <div css={tw`flex flex-col space-y-4 mt-4`}>
              {['Landlord', 'Plumber', 'SASB', 'Other'].map(option => (
                <label
                  css={tw`inline-flex space-x-4 items-center select-none`}
                  key={option}
                >
                  <Checkbox {...register(`step13.contactedWho.${option}`)} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {contactedOther && (
            <div>
              <Label number="4.29" required>
                Specify other
              </Label>
              <Input
                {...register('step13.contactedOther', {
                  required: true,
                })}
                error={!!errors?.step13?.service_provider?.how_much}
              />

              <FieldErrorMessage name="step13.contactedOther" errors={errors} />
            </div>
          )}

          {!contactedSASB && (
            <div>
              <Label number="4.30" required>
                Why didn't you contact SASB for the problem?
              </Label>

              <div css={tw`flex flex-col space-y-4 mt-4`}>
                {[
                  `Don't know how to contact`,
                  'SASB usually take so long',
                  'SASB will not solve that problem for me',
                  'Do not trust SASB',
                  'Someone else will call',
                  'More convenient to call a plumber to fix my problem',
                  'Cheaper to call a plumber',
                ].map((option, index) => (
                  <label
                    css={tw`inline-flex space-x-4 items-center select-none`}
                    key={option}
                  >
                    <Checkbox
                      {...register(`step13.SASBNotContactedReasons.${index}`)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div>
        <Label number="4.31" required>
          What services did you request
        </Label>
        <Controller
          name="step13.whatServices"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={[
                'Fecal Sludge removal',
                'Fecal Sludge Removal (Priority Request)',
                'Cleaning of Septic Tank',
              ]}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step13?.whatServices}
            />
          )}
        />
        <FieldErrorMessage name="step13.whatServices" errors={errors} />
      </div>

      <div>
        <Label number="4.32" required>
          Did you pay for the service?
        </Label>
        <Controller
          name="step13.paidService"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step13?.paidService}
            />
          )}
        />
        <FieldErrorMessage name="step13.paidService" errors={errors} />
      </div>

      {paid === 'Yes' && (
        <div>
          <Label required>How much did you pay for the service?</Label>
          <Input
            {...register('step13.serviceHowMuch', {
              valueAsNumber: true,
            })}
            error={!!errors?.step13?.serviceHowMuch}
            type="number"
          />

          <label css={tw`inline-flex space-x-4 items-center select-none mt-2`}>
            <Checkbox {...register(`step13.serviceHowMuch.IDontKnow`)} />
            <span>I don't know</span>
          </label>
        </div>
      )}
    </div>
  )
}

export default memo(Step13)
