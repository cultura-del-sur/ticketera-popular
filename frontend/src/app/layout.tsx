import type { Metadata } from 'next'

import { TLayout } from 'shared/types'

import { titilliumWeb } from 'shared/fonts'
import 'shared/styles.scss'
import Header from 'shared/components/Header'


export const metadata: Metadata = {
  title: 'Ticketera Popular',
  description: '',
}

const RootLayout: TLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
