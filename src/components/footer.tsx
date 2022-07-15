import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
  return (
    <div className={'footer-box'}>
      <div className={'footer'}>
        <p>Copyright © 2022 wesupportrms.org</p>
        <p className={'page-pc'}>This page is licensed under a&nbsp;
        <a href='https://creativecommons.org/licenses/by-nd/4.0/'>Creative Commons Attribution-NoDerivatives 4.0 International License.</a></p>
        <p className={'page-h5'}>This page is licensed under a&nbsp;
        <a href='https://creativecommons.org/licenses/by-nd/4.0/'>Creative Commons<br />Attribution-NoDerivatives 4.0 International License.</a></p>
      </div>
    </div>
  )
}
