import React from "react";

const InfoCard = props => {
  const { firstname, lastname, avatar, email, mobile, cleanState } = props;
  console.log(cleanState);
  return (
    <div>
      <div className="card-body text-center">
        <p className="card-text">
          {firstname} {lastname}
        </p>
        {avatar ? (
          <img
            src={avatar}
            className="card-img-top p-2 mt-2 avatar"
            alt="Your avatar"
          />
        ) : null}
        <p className="card-title">Email: {email}</p>
        <p className="card-title">Mobile: {mobile}</p>
        <button type="button" onClick={cleanState} className="btn btn-info">
          Reset
        </button>
      </div>
    </div>
  );
};
export default InfoCard;
