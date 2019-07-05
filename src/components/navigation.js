import { Link } from "gatsby"
import React from "react"

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    // adding the initial state
    this.state = {
      showMenu: false,
    }
  }

  toggleActive = () => {
    console.log("toggling active state")

    // toggling the state
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
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
          <button
            onClick={() => this.toggleActive()}
            style={{ marginRight: `1rem` }}
          >
            Menu ->
          </button>
          <ul
            style={{
              listStyle: `none`,
              margin: 0,
              padding: 0,
              display: this.state.showMenu ? `flex` : `none`,
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
}

export default Navigation
