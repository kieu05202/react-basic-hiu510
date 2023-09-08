import React from "react";

class Childcomponent extends React.Component {
  state = {};

  render() {
    let { job } = this.props;
    return (
      <>
        {" "}
        <div className="job-lists">
          {" "}
          {job.map((item, index) => {
            return (
              <div key={item.id}>
                {" "}
                {item.job} - {item.salary}{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </>
    );
  }
}

export default Childcomponent;
