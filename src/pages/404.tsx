import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <>
    <Seo title={'404'} description={''} meta={[]} lang={''} />
    <div className={'not-found-page'}>
      <div className={'not-img'}>
        <StaticImage placeholder="blurred" alt="telegram" src="../static/images/404.png" />
      </div>
    </div>
  </>
)

export default NotFoundPage
