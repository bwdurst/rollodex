import React from 'react'
import User from './user'

class UserContainer extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data.results })
        console.log(data);
      })
  }

  render() {
    return (
      this.state.users.map(user => (
       <User key={user.login.uuid} deets={user} />
      ))
    )
  }
}

export default UserContainer;