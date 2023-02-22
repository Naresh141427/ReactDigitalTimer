import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeInMinutes: (25 * 60) / 60,
      timeInSeconds: (25 * 60) % 60,
      isStarted: false,
    }
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const {timeInMinutes, timeInSeconds} = this.state
      const {isStarted} = this.state

      if (isStarted) {
        if (timeInSeconds > 0) {
          this.setState(prevState => ({
            timeInSeconds: prevState.timeInSeconds - 1,
          }))
        }
        if (timeInSeconds === 0) {
          if (timeInMinutes === 0) {
            clearInterval(this.myInterval)
            this.setState(prevState => ({
              isStarted: !prevState.isStarted,
            }))
          } else {
            this.setState(prevState => ({
              timeInMinutes: prevState.timeInMinutes - 1,
              timeInSeconds: 59,
            }))
          }
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  onIncrementingTimerValue = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes + 1}))
    }
  }

  onDecrementingTimerValue = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes - 1}))
    }
  }

  onStartOrPause = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }))
  }

  onResettingTimerValue = () => {
    this.setState({timeInMinutes: 25, timeInSeconds: 0, isStarted: false})
  }

  render() {
    const {timeInMinutes, timeInSeconds, isStarted} = this.state

    const minutes = timeInMinutes > 9 ? timeInMinutes : `0${timeInMinutes}`

    const seconds = timeInSeconds > 9 ? timeInSeconds : `0${timeInSeconds}`

    const startAndPauseButtonsIcons = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startOrPauseText = isStarted ? 'Pause' : 'Start'

    const startAndPauseIcons = isStarted ? 'pause icon' : 'play icon'

    const timerStatus = isStarted ? 'Running' : 'Paused'

    return (
      <div className="app-container">
        <h1 className="app-title">Digital Timer</h1>
        <div className="timer-card-container">
          <div className="elapsed-timer-container">
            <div className="timer-container">
              <h1 className="timer">
                {minutes}:{seconds}
              </h1>
              <p className="timer-status">{timerStatus}</p>
            </div>
          </div>
          <div className="timer-controls-container">
            <div className="start-reset-container">
              <button
                type="button"
                className="button"
                onClick={this.onStartOrPause}
              >
                <img
                  src={startAndPauseButtonsIcons}
                  className="icon text"
                  alt={startAndPauseIcons}
                />
                {startOrPauseText}
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.onResettingTimerValue}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  className="icon"
                  alt="reset icon"
                />
              </button>
              <p className="text">Reset</p>
            </div>
            <p className="timer-limit">Set Timer limit</p>
            <div className="increment-decrement-container">
              <button
                type="button"
                className="buttons"
                onClick={this.onDecrementingTimerValue}
              >
                -
              </button>
              <p className="timer-count-button">{timeInMinutes}</p>
              <button
                type="button"
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
