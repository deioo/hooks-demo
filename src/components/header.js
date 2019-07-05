import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import anime from "animejs"

const Header = ({ siteTitle, isIndex }) => {
  if (isIndex) {
    const timeline = anime.timeline({
      easing: "easeInOutQuad",
      duration: 1250,
    })

    timeline.add({
      targets: ".headerTitle",
      translateX: ["20%", "0"],
      opacity: [0, 1],
    })
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        className="header"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 className="headerTitle" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
            {` `}
            {isIndex ? `index page` : `secondary page`}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isIndex: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
