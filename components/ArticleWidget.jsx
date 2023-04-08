import React from "react";
import moment from "moment/moment";

const articleWidget = ({ PostsToShow, titleToShow }) => {
  return (
    <div className="widget-card">
      <div className="widget-card-header">
        <h3>{titleToShow}</h3>
      </div>
      <div className="widget-card-body">
        <div className="widget-post-list">
          {PostsToShow.map((post) => (
            <a href={`/articles/${post.slug}`}>
              <div className="nthArticle" key={post.title}>
                <div className="article-image">
                  <img src={post.featuredImage.url} alt="" />
                </div>
                <div className="article-date-title">
                  <div className="date">
                    {moment(post.createdAt).format("MM DD, YYYY")}
                  </div>
                  <p>{post.title.substring(0, 65) + "..."}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default articleWidget;
