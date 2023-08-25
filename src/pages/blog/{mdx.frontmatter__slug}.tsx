import { PageProps, graphql } from 'gatsby'
import { Layout, Seo } from '../../components'

export function BlogPost({
  data,
  children,
}: PageProps<Queries.BlogPostPageQuery>) {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title ?? ''}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  )
}

export default BlogPost

export const Head = ({ data }: PageProps<Queries.BlogPostPageQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title ?? ''} />
)

export const query = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
