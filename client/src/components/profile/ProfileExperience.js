import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{company} </h3>
    <p>
      <Moment format="YYYY/MM/DD">{from}</Moment> -
      {!to ? "now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <strong>Positon :</strong> {title}
    <p>
      <strong>Description :</strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
