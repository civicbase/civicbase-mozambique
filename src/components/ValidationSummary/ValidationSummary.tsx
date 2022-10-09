import { Disclosure } from '@headlessui/react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const ValidationSummary = ({ step }: { step: number }) => {
  const {
    formState: { errors },
  } = useFormContext()

  //   position: fixed;
  // top: 170px;
  // z-index: 10;
  if (errors[`step${step}`]) {
    return (
      <div css={tw`w-full fixed top[110px] z-10`}>
        <div css={tw`w-full max-w-[650px] rounded-2xl bg-white p-2`}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  css={tw`flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75`}
                >
                  <span>What is your refund policy?</span>
                  {/* <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-red-500`}
                    /> */}
                </Disclosure.Button>
                <Disclosure.Panel
                  css={tw`px-4 pt-4 pb-2 text-sm text-gray-500`}
                >
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" css={tw`mt-2`}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  css={tw`flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75`}
                >
                  <span>Do you offer technical support?</span>
                  {/* <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-red-500`}
                    /> */}
                </Disclosure.Button>
                <Disclosure.Panel
                  css={tw`px-4 pt-4 pb-2 text-sm text-gray-500`}
                >
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    )
  }

  return null
}

export default ValidationSummary
