// Write your code here.
import {Component} from 'react'
import './index.css'
class LetterCalculator extends Component {
  state = {letters: ''}

  cal = event => {
    this.setState({
      letters: event.target.value,
    })
  }

  render() {
    const {letters} = this.state

    const a = letters.length

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calc-section">
            <h1>Calculate the Letters you enter</h1>
            <form className="form-container">
              <label htmlFor="phrase">Enter the phrase</label>
              <input
                type=""
                id="phrase"
                placeholder="Enter the phrase"
                onChange={this.cal}
              />{' '}
            </form>
            <p className="letters-count">No.of letters: {a}</p>
            <div className="img-sec">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
                alt="letters calculator"
              />{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LetterCalculator
