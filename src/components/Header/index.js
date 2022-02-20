// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="navbar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-icon"
      />
      <p className="logo-name">Wave</p>
    </div>
    <div className="link-container">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
