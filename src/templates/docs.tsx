import React,{useEffect} from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import ExpandableCard from '../components/docs/expandableCard'
import Header from '../components/header'
import HeaderModal from '../components/headerModal'
import Seo from '../components/seo'
import H2 from '../customMdx/h2'
import H3 from '../customMdx/h3'
import H4 from '../customMdx/h4'
import H5 from '../customMdx/h5'
import H6 from '../customMdx/h6'

const components = {
  Link,
  ExpandableCard,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
}

const DocsPage = ({ data: { allMdx } }: any) => {
  const content = allMdx.edges[0].node
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0]
    body.style.background = 'white'
  }, [])
  return (
    <>
      <Seo title={content.frontmatter.title} description={''} meta={[]} lang={''} />
      <Header />
      <div className={'docs-header page-h5'}>
        <HeaderModal />
      </div>
      <div className={'docs-page'}>
        <div className={'container docs'}>
          <div className={'docs-content'}>
            <h1 className={'title'}>{content.frontmatter.title}</h1>
            <MDXProvider components={components}>
              <MDXRenderer>{content.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
// tableOfContents(maxDepth: 2)
export const query = graphql`
  query ($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          rawBody
          body
          frontmatter {
            title
          }
          tableOfContents
        }
      }
    }
  }
`
export default DocsPage
