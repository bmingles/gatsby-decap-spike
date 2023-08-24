import { graphql } from 'gatsby'
import { Layout, Seo } from '../components'

export interface BlogPageProps {
  data: any
}

export function BlogPage({ data }: BlogPageProps) {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export default BlogPage

export function Head() {
  return <Seo title="Blog Posts" />
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`
