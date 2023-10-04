// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  onChangeSearchButton = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state
    const totalValue = inputValue.length
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="input-card-container">
            <h1 className="title">Calculate the Letters you enter</h1>
            <div className="search-card">
              <label className="label-text" htmlFor="labelText">
                Enter the phrase
              </label>
              <input
                id="labelText"
                type="text"
                placeholder="Calculator"
                className="letter-input"
                onChange={this.onChangeSearchButton}
                value={inputValue}
              />
            </div>
            <div className="count-container">
              <p className="count-text">No.of letters: {totalValue}</p>
            </div>
          </div>
          <div className="img-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
