import React, {Component} from 'react';

export default class CreateUser extends Component {

  constructor(props) {
    super(props);

    // bind methods to *this*
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // set up the state
    this.state = {
      username: ''
    }
  }

  // update the username in the state from text box
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  // handle form submit
  onSubmit(e) {
    // prevent default html form submit action from happening
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    // submit exercise to backend api
    console.log(user);

    // clear out username in state
    this.setState({
      username: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
                   required
                   className="form-control"
                   value={this.state.username}
                   onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}
