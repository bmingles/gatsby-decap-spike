import { Layout, Seo } from '../components'

export interface BlogPageProps {}

export function BlogPage({}: BlogPageProps) {
  return (
    <Layout pageTitle="Blog Posts">
      <p>Blog Posts</p>
    </Layout>
  )
}

export default BlogPage

export function Head() {
  return <Seo title="Blog Posts" />
}
