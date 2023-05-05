import {withRouter, Link} from 'react-router-dom'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = props => {
  const {history} = props
  const onClickLogo = () => {
    history.replace('/')
  }

  return (
    <div className="nav-main">
      <nav className="nav-container">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          onClick={onClickLogo}
        />
        <Popup
          modal
          trigger={
            <button
              data-testid="hamburgerIconButton"
              className="trigger-button"
              type="button"
            >
              <GiHamburgerMenu className="menu-icon" />
            </button>
          }
          overlayStyle={overlayStyles}
        >
          {close => (
            <ul className="links-container">
              <button
                data-testid="closeButton"
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <li className="routes-container">
                <Link to="/" className="nav-link">
                  <AiFillHome alt="website logo" className="link-icons" />
                  Home
                </Link>
              </li>
              <li className="routes-container">
                <Link to="/about" className="nav-link">
                  <BsInfoCircleFill alt="website logo" className="link-icons" />
                  About
                </Link>
              </li>
            </ul>
          )}
        </Popup>
      </nav>
    </div>
  )
}

export default withRouter(Header)
