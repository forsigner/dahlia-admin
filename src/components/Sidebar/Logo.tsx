import { i18n } from 'dahlia/i18n'
import { Link } from 'dahlia/router'
import React from 'react'
import logo from './logo.svg'

export default () => (
  <Link to="/">
    <div>
      <img src={logo} alt="logo" />
      <h1>{i18n.appName}</h1>
    </div>
    <style jsx>{`
      div {
        position: relative;
        height: 64px;
        padding-left: 24px;
        overflow: hidden;
        line-height: 64px;
        background: #002140;
        transition: all 0.3s;
      }
      img {
        display: inline-block;
        height: 32px;
        vertical-align: middle;
      }

      h1 {
        display: inline-block;
        margin: 0 0 0 12px;
        color: white;
        font-weight: 600;
        font-size: 20px;
        font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
    `}</style>
  </Link>
)
