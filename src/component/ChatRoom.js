import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class ChatRoom extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      messages: [
        // {id: 0, text: 'asdasd'},
        // {id: 1, text: 'asdasd'},
        // {id: 2, text: 'asdasd'}
      ]
    }

  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', snapashot => {
      const currentMessages = snapashot.val();
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        });
      }
    });
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let list = this.state.messages;
    const newMessage = {
      id: this.state.messages.length,
      text: this.state.message
    };
    // list.push(newMessage);
    // this.setState({
    //   messages: list
    // });
    firebase.database().ref(`messages/${newMessage.id}`)
      .set(newMessage);
    this.setState({
      message: ''
    });
  }

  render() {
    const { messages } = this.state;
    const messagesList = messages.map(message => {
      return <li key={message.id}>{message.text}</li>
    });

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <ol>
          {messagesList}
        </ol>
        <TextField
          onChange={this.updateMessage.bind(this)}
          value={this.state.message}
          placeholder="Message"
          type="text" />
        <Button
          onClick={this.handleSubmit.bind(this)}
          raised color="primary">
          Send
        </Button>
      </form>
    )
  }
}
export default ChatRoom;
