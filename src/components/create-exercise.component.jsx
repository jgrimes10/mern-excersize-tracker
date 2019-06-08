import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends Component {

  constructor(props) {
    super(props);

    // bind methods to *this*
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // set up the state
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    // load the users dropdown list
    this.setState({
      users: ['test user'],
      username: 'test user'
    });
  }

  // update the username in the state from text box
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  // update the description in the state from text box
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  // update the duration in the state from text box
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  // update the date in the state from date picker
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  // handle form submit
  onSubmit(e) {
    // prevent default html form submit action from happening
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    // submit exercise to backend api
    console.log(exercise);

    // after form submitted, take user back to homepage
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
              {
                // loop through each item in users and return an option for the select
                this.state.users.map(user => {
                  return <option
                    key={user}
                    value={user}>
                    {user}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
                   required
                   className="form-control"
                   value={this.state.description}
                   onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input type="text"
                   className="form-control"
                   value={this.state.duration}
                   onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker selected={this.state.date}
                          onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}
