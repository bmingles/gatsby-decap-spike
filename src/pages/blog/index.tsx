import { Link, PageProps, graphql } from 'gatsby'
import { Layout, Seo } from '../../components'

export function BlogPage({ data }: PageProps<Queries.BlogIndexPageQuery>) {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`${node.fields?.slug ?? ''}`}>
              {node.frontmatter?.title}
            </Link>
          </h2>
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
  query BlogIndexPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        fields {
          slug
        }
      }
    }
  }
`
