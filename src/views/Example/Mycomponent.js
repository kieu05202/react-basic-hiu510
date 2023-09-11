import React from "react";
import "../Example/Childcomponent.js";
import Childcomponent from "../Example/Childcomponent.js";

class myComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "a123", job: "Developer", salary: "500" },
      { id: "a124", job: "Tester", salary: "400" },
      { id: "a125", job: "Project manager", salary: "1000" },
    ],
  };
  // sdsdsgit
  handelFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handelLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleClickSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname"> First name: </label> <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handelFirstName}
          />{" "}
          <br />
          <label htmlFor="lname"> Last name: </label> <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handelLastName}
          />{" "}
          <br /> <br />
          <input
            type="submit"
            value="Submit"
            onClick={this.handleClickSubmit}
          />{" "}
        </form>{" "}
        <Childcomponent job={this.state.arrJobs}> </Childcomponent>{" "}
      </>
    );
  }
}

export default myComponent;
