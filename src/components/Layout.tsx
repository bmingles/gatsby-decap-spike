import { PropsWithChildren } from 'react'
import Nav from './Nav'

export interface LayoutProps {
  pageTitle: string
}

export function Layout({
  pageTitle,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <div>
      <Nav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
