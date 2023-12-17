import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { TLayout } from 'shared/types'

import 'shared/styles.scss'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ticketera Popular',
  description: '',
}

const RootLayout: TLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
