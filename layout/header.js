import Link from "next/link"

import { useState } from "react"

const Header = () => {
  const [isActive, setisActive] = useState(false)
  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-size-5" href="/">
            Formzila
          </a>
        </Link>

        <a
          role="button"
          onClick={() => setisActive(!isActive)}
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item ml-3 is-size-5">Home</a>
          </Link>

          <Link href="/tests">
            <a href="/tests" className="navbar-item ml-3 is-size-5">
              Tests
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
