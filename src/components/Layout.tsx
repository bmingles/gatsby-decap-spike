import { PropsWithChildren } from 'react'
import Nav from './Nav'
import '../styles/styles.scss'
import { layout } from '../styles/components.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

export interface LayoutProps {
  pageTitle: string
}

export function Layout({
  pageTitle,
  children,
}: PropsWithChildren<LayoutProps>) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layout}>
      <header>{data.site.siteMetadata.title}</header>
      <Nav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
