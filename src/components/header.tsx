import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
export default function Header() {
  return (
    <div className={'docs-header-pc'}>
      <div className={'header'}>
        <div className={'logo'}>
          <Link to="/">
            <StaticImage
              className={'logo-img'}
              placeholder="blurred"
              alt="docs-button"
              src="../static/images/logo-pc.png"
            />
          </Link>
        </div>
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
  )
}
