import React from "react";

const Author = ({ authorInfo }) => {
  return (
    <div className="author-container">
      <img
        className="author-image"
        src={authorInfo.photo.url}
        alt="Article Image"
      />
      <div className="glass-card">
        <h1 className="author-name">{authorInfo.name}</h1>
        <p className="author-bio">{authorInfo.bio}</p>
      </div>
    </div>
  );
};

export default Author;
