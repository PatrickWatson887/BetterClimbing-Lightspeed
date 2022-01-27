import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type PageLayout = React.FC

export type PageGetLayout = (page: ReactElement) => ReactNode

export type NextPageWithLayout = NextPage & {
  getLayout: PageGetLayout
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
