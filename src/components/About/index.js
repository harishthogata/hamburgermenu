import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        className="about-lg"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
      <img
        className="about-sm"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
    </div>
  </>
)

export default About
