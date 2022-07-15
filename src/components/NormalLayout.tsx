import React from 'react'
// import Footer from '../components/footer'
import Seo from './seo'

class PageModelTitle {
  name: string
  title: string
  constructor(title: string, name: string) {
    this.name = name
    this.title = title
  }
}

export default function NormalLayout(children: React.ReactNode, pageModel: PageModelTitle): JSX.Element {
  return (
    <div className={pageModel.name}>
      <Seo title={pageModel.title} description={''} meta={[]} lang={''} />
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
      {/* <ScrollTop /> */}
    </div>
  )
}
