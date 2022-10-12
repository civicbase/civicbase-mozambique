import { Disclosure } from '@headlessui/react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

const PanelExpand = ({
  title,
  children,
}: {
  title: string
  children: React.ReactElement
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`w-full `}>
      <div css={tw`w-full rounded-2xl bg-white p-2`}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                css={tw`flex w-full justify-between items-center rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
              >
                <span>{title}</span>
                {open ? <GoChevronDown /> : <GoChevronUp />}
              </Disclosure.Button>
              <Disclosure.Panel css={tw`px-4 pt-4 pb-2 text-sm text-gray-500`}>
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default PanelExpand
