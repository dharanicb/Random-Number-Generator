// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickButton = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: RandomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="card-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="count-value">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="description">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
