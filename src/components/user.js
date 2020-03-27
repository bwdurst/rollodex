import React from 'react'

class User extends React.Component {
  state = {
    toggle: false
  }

  toggleDetailHandler() {
    const toggled = !this.state.toggle
    this.setState({ toggle: toggled })
  }

  render() {
    const buttonText = this.state.toggle ? 'Hide Details' : 'Show Details'
    const user = this.props.deets;

    const details = this.state.toggle ?
      <div>
        <p>Country: {user.location.country}</p>
        <p>Age: {user.dob.age}</p>
        <p>Email: {user.email}</p>
      </div>
      : null

    console.log(this.state)

    return (
      <div>
        <p>{this.props.deets.name.first} {this.props.deets.name.last}</p>
        <img src={user.picture.thumbnail} alt='nah' />
        <button onClick={() => this.toggleDetailHandler()}>{buttonText}</button>
        {details}
      </div>
    )
  }
}

export default User;
