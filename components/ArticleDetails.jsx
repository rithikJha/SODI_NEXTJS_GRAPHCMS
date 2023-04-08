import React from "react";

const ArticleDetails = ({ allDetails }) => {
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div>
      <div className="full-article-container">
        <h1 className="full-article-title">{allDetails.title}</h1>
        <img
          className="full-article-image"
          src={allDetails.featuredImage.url}
          alt="Article Image"
        />
        {Array.isArray(allDetails.categories) &&
          allDetails.categories.map((category, index) => (
            <a href={`/categories/${category.slug}`}><p className="full-article-category">{category.name}</p></a>
          ))}
        <div
          className="full-article-content"
          dangerouslySetInnerHTML={createMarkup(allDetails.content.html)}
        />
      </div>
    </div>
  );
};

export default ArticleDetails;
