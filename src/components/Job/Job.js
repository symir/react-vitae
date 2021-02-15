import React from "react";
import "./Job.css";

const Job = (props) => {
  console.log(props);
  return (
    <div classname="job">
      <div className="jobTitle">
        {props.title}, {props.company}
      </div>
      <div className="jobDate">{props.date}</div>
      <div className="jobDescription">{props.description}</div>
    </div>
  );
};

export default Job;
