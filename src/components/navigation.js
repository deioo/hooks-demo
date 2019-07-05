import { Link } from "gatsby"
import React from "react"

const Navigation = () => {
  return (
    <nav
      style={{
        background: `#999999`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.45rem 1.0875rem`,
          overflow: `hidden`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <button style={{ marginRight: `1rem` }}>Menu -></button>
        <ul
          style={{
            listStyle: `none`,
            margin: 0,
            padding: 0,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <li style={{ marginRight: `1rem`, marginBottom: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Home
            </Link>
          </li>
          <li style={{ marginRight: `1rem`, marginBottom: 0 }}>
            <Link
              to="/page-2"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Page 2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation
