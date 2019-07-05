import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import anime from "animejs"

const Header = ({ siteTitle, isIndex }) => {
  useEffect(() => {
    if (isIndex) {
      const timeline = anime.timeline({
        easing: "easeOutQuad",
        duration: 750,
      })

      timeline.add({
        targets: ".header",
        height: [0, 200],
      })

      timeline.add(
        {
          targets: ".headerTitle .headerTitleChar",
          opacity: [0, 1],
          delay: (el, i) => i * 75,
        },
        "-=600"
      )
    }
  }, [isIndex])

  return (
    <header
      className="header"
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        overflow: `hidden`,
        height: `200px`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
          width: `100%`,
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
            {siteTitle.split("").map((c, index) => (
              <span key={`char-${index}`} className="headerTitleChar">
                {c}
              </span>
            ))}
          </Link>
        </h1>
        <h4>{isIndex ? `index page` : `Secondary page`}</h4>
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
