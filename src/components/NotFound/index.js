import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="notFound-container">
      <img
        className="not-found"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default About
