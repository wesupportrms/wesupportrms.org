import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import HeaderModal from '../components/headerModal'
import NormalLayout from '../components/NormalLayout'
import Footer from '../components/footer'
import BannerImg from '../static/images/banner.png'
import BannerImgH5 from '../static/images/banner-h5.png'
import { StaticImage } from 'gatsby-plugin-image'

class PageModelTitle {
  name: string
  title: string
  constructor(title: string, name: string) {
    this.name = name
    this.title = title
  }
}

const IndexPage = () => {
  let pageModel = new PageModelTitle('Home', 'new-index')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}
export default IndexPage

function Main() {

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0]
    body.style.background = '#0A0A0A'
  }, [])

  return (
    <div className={'home-page'}>
      <HeaderModal />
      <div className={'banner-box'}>
        <div className={'banner'}>
          <img className={'page-pc'} src={BannerImg} alt="banner-img" />
          <img className={'page-h5'} src={BannerImgH5} alt="banner-h5-img" />
        </div>

        <div className={'container'}>
          <div className={'content'}>
            <Link to="/">
              <StaticImage
                className={'logo'}
                placeholder="blurred"
                alt="logo"
                src="../static/images/logo-pc1.png"
              />
            </Link>
            <h2 className={'page-pc'}>WE SUPPORT RMS</h2>
            <h2 className={'page-h5'}>
              WE
              <br />
              SUPPORT
              <br />
              RMS
            </h2>
            <div className={'page-pc'}>
              <div className={'header'}>
                <Link to="/aboutrms/">
                  About RMS<i></i>
                </Link>
                <Link to="/campaign/">
                  The Campaign<i></i>
                </Link>
                <Link to="/support/">
                  How to Support<i></i>
                </Link>
                <Link to="/community/">
                  Join the Community<i></i>
                </Link>
                <Link to="/about/">
                  About US<i></i>
                </Link>
              </div>
            </div>
            <p>
              Richard Matthew Stallman (/ˈstɔːlmən/; born March 16, 1953), also known by his initials, rms, is an
              American free software movement activist and programmer. He campaigns for software to be distributed in
              such a manner that its users have the freedom to use, study, distribute, and modify that software.
              Software that ensures these freedoms is termed free software. Stallman launched the GNU Project, founded
              the Free Software Foundation in October 1985, developed the GNU Compiler Collection and GNU Emacs, and
              wrote the GNU General Public License.
            </p>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
