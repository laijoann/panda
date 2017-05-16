import React, {Component} from 'react'
import Nav from './Nav.jsx'

class App extends Component {
  state = {
    currUser: 'Joann'
  }

  render() {
    return (
      <div>
        <Nav currUser={this.state.currUser}/>
      </div>
    )
  }
}
export default App
