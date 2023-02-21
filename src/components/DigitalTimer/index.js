import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {timerValue: 25, isStarted: false}
  }

  onIncrementingTimerValue = () => {
    this.setState(prevState => ({timerValue: prevState.timerValue + 1}))
  }

  onDecrementingTimerValue = () => {
    this.setState(prevState => ({timerValue: prevState.timerValue - 1}))
  }

  StartOrPause = () => {
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  onResettingTimerValue = () => {
    this.setState({timerValue: 25})
  }

  render() {
    const {timerValue, isStarted} = this.state

    const startAndPauseButtonsIcons = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startOrPauseText = isStarted ? 'Pause' : 'Start'

    const timerStatus = isStarted ? 'Running' : 'Paused'

    return (
      <div className="app-container">
        <h1 className="app-title">Digital Timer</h1>
        <div className="timer-card-container">
          <div className="elapsed-timer-container">
            <div className="timer-container">
              <h1 className="timer">{timerValue}:00</h1>
              <p className="timer-status">{timerStatus}</p>
            </div>
          </div>
          <div className="timer-controls-container">
            <div className="start-reset-container">
              <button className="button">
                <img
                  src={startAndPauseButtonsIcons}
                  className="icon"
                  alt="play icon"
                  onClick={this.StartOrPause}
                />
              </button>
              <p className="text">{startOrPauseText}</p>
              <button className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  className="icon"
                  alt="reset icon"
                  onClick={this.onResettingTimerValue}
                />
              </button>
              <p className="text">Reset</p>
            </div>
            <p className="timer-limit">Set Timer limit</p>
            <div className="increment-decrement-container">
              <button
                className="buttons"
                onClick={this.onDecrementingTimerValue}
              >
                -
              </button>
              <div className="timer-count-button">{timerValue}</div>
              <button
                className="buttons"
                onClick={this.onIncrementingTimerValue}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
