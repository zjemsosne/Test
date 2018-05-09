import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Apps extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        startDate: ''
      }
    }

    handleClick = () => {
      alert('Request sent!');
      console.log(this.state.startDate)
    }

    handleChange = (event) => {

      console.log(this.state.startDate)

      this.setState({
        startDate: event.target.value
      })

    }

    render() {
      return (
        <div className="flex-container">
          <div className="row">
            <div className="flex-item block">
              <br></br>
              <div className="availability"><span>available laptops 5/30</span></div>
              <div className="fieldBorder">
                <label>&#128187;</label>
                <input type="text" id="input" placeholder="user"></input>
              </div>
              <br></br>
              <input type="date" id="dateFrom" onChange={(event) => this.handleChange(event)}></input>
              <input type="date" id="dateTo"></input>

              <textarea id="textarea" rows="3" placeholder="your message"></textarea>
            </div>
            <div className="flex-item block2"><span className="sendRequest" onClick={this.handleClick}>SEND</span></div>
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(
    <Apps />,
    document.getElementById('app'),
  );

});
