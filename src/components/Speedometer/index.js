import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateBtn = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  breakBtn = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="meter-img"
          alt="speed meter"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <p className="speed-text">Speed is {speed}mph</p>
        <p className="speedLimit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.accelerateBtn}
            className="button accBtn"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.breakBtn}
            className="button brkBtn"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
