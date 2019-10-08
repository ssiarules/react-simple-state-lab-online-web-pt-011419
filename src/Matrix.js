import React, { Component } from 'react';
import Cell from './Cell.js';

class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: [
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
  ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00']
],
}

export default Matrix
