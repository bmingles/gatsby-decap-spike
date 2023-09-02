import type { HeadFC, PageProps } from 'gatsby'
import { Layout, Seo } from '../components'

function IndexPage(_pageProps: PageProps) {
  return (
    <Layout pageTitle="Home Page">
      <p>Home</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <Seo title="Home Page" />
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <script>
      {`if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }`}
    </script>
  </>
)
