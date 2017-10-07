import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import ChatRoom from './component/ChatRoom';

class App extends Component {
  render() {
    return(
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Chat App
            </Typography>
          </Toolbar>
        </AppBar>
        <ChatRoom/>
      </div>
    )
  }
}

export default App;
