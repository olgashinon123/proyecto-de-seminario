import React from "react";

export const CardComponent = ({
  images: {
    original: { url },
  },
  title,
  username,
}) => {
  console.log(url);
  return (
    <div className="col-4 card">
      <img src={url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p className="card-text">{title}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
