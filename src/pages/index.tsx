import React from 'react'
import { Link } from 'gatsby'
import HeaderModal from '../components/headerModal'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import BannerImg from '../static/images/banner.png'
import BannerImgH5 from '../static/images/banner-h5.png'
const IndexPage = () => {
  let pageModel = new PageModelTitle('Home', 'new-index')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}
export default IndexPage

function Main() {
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
          </div>
        </div>
      </div>
    </div>
  )
}
