import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="main-container">
    <Header />
    <div className="home-container">
      <img
        className="home-lg"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />
      <img
        className="home-sm"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      />
    </div>
  </div>
)

export default Home
