import React, {Compnent} from 'react';

export default class Cell extends Component {

constructor(props) {
    super(props)
    this.state = {
       color: this.props.value
    }
  }

clickEvent = (event) =>(
  this.setState({
    color: '#333'
  })
)
 render(){
   return (
     <div onClick ={}>

     </div>
   )
 }
}
