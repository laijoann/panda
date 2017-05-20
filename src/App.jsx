import React, {Component} from 'react'
import Nav from './Nav.jsx'
import Cal from './Cal.jsx'

class App extends Component {
  state = {
    currUser: 'Joann'
  }

  render() {
    return (
      <div>
        <Nav currUser={this.state.currUser}/>
        <Cal />
      </div>
    )
  }
}
export default App
