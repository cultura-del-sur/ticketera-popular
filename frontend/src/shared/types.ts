import { Metadata } from 'next'
import { ReactNode } from 'react'

type TLayout = (props: {
  children: ReactNode
  metadata: Metadata
}) => JSX.Element

export type {
  TLayout,
}
