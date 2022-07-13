import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <div className={'docs-header-pc'}>
      <div className={'header'}>
        <Link to="/">
          Home<i></i>
        </Link>
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
  )
}
