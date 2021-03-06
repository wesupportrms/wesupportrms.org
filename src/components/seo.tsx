import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SeochildProps } from '../model/PageModel'

const Seo: React.FC<SeochildProps> = props => {
  const { title, description, meta, lang } = props
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        ...meta
      ]}
    />
  )
}
export default Seo

Seo.defaultProps = {
  description: 'WE-SUPPORT-RMS',
  meta: [],
  lang: 'en'
}
