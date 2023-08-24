import { Layout, Seo } from '../components'

export interface BlogPostProps {}

export function BlogPost({}: BlogPostProps) {
  return (
    <Layout pageTitle="Post">
      <p>Post</p>
    </Layout>
  )
}

export default BlogPost

export function Head() {
  return <Seo title="Blog Posts" />
}
