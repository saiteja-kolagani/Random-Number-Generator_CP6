// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerate = () => {
    this.setState({num: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button type="button" className="button" onClick={this.onGenerate}>
              Generate
            </button>
          </div>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
