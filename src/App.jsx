import React, {Component} from 'react'
import Nav from './Nav.jsx'
import Cal from './Cal.jsx'
import List from './List.jsx'
import Heatmap from './Heatmap.jsx'

class App extends Component {
  state = {
    currUser: 'Joann'
  }

  render() {
    return (
      <div>
        <Nav currUser={this.state.currUser} />
        <Cal />
        <Heatmap />
        <List />
      </div>
    )
  }
}

export default App
