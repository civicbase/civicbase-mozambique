import tw from 'twin.macro'
import React from 'react'
import Card from 'components/Card'

type PagesLayoutProps = {
  header: React.ReactNode
  footer: React.ReactNode
  content: React.ReactNode
  geolocation?: React.ReactNode
  ODKConfirmation?: React.ReactNode
  step: number
}

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center h-screen w-screen`,
    hasBackground && tw`bg-gradient-to-b from-brand via-bgColor11 to-brand2`,
  ],
}

const PagesLayout = ({ footer, content, geolocation, ODKConfirmation, header, step }: PagesLayoutProps) => {
  return (
    <div css={styles.container({ hasBackground: true })}>
      <Card css={tw`relative`}>
        {step > 1 && (
          <>
            <div css={tw`h-1 bg-brand2 absolute top-0 left-0`} style={{ width: `${(step * 100) / 22}%` }} />
            <div css={tw`w-full h-1 bg-brand2 bg-opacity-40 absolute top-0 left-0`} />
          </>
        )}
        {header}
        {geolocation}
        {ODKConfirmation}
        <div id="content" css={tw`flex-1 overflow-y-auto px-4 py-2`}>
          {content}
        </div>
        <div css={tw`justify-end`}>{footer}</div>
      </Card>
    </div>
  )
}

export default PagesLayout
