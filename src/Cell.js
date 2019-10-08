import React, {Component} from 'react';

export class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value,
    }
  }

  handleClick = (event) => (
    this.setState({
      color: '#333',
    })
  )

  render() {
    return(
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>{this.props.value}</div>
    )
  }
}

Cell.defaultProps = {value: '#f00'}
