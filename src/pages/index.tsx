import type { HeadFC, PageProps } from 'gatsby'
import { Layout } from '../components'

export const Head: HeadFC = () => <title>Home Page</title>

function IndexPage(_pageProps: PageProps) {
  return (
    <Layout pageTitle="Home Page">
      <p>Home</p>
    </Layout>
  )
}

export default IndexPage
