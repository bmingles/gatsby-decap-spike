import { PropsWithChildren } from 'react'
import Nav from './Nav'
import '../styles/styles.scss'
import { layout } from '../styles/components.module.scss'

export interface LayoutProps {
  pageTitle: string
}

export function Layout({
  pageTitle,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <div className={layout}>
      <Nav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
