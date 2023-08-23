import { graphql, useStaticQuery } from 'gatsby'

export interface SeoProps {
  title: string
}

export function Seo({ title }: SeoProps) {
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
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  )
}

export default Seo
