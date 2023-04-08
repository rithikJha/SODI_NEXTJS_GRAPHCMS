import React from "react";
import Link from "next/link";
const ArticleCard = ({
  title,
  slug,
  date,
  image,
  categories,
  content,
  excerpt,
  author,
  classification,
}) => {
  const dateObj = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <>
      <div className="card">
        <div className="left-side">
          <div className="left-side-top">
            <p> {classification}</p>
            <p>|</p>
            <span className="date">{formattedDate}</span>
          </div>

          <div className="left-side-bottom">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="right-side">
          <div className="card-body">
            <h3 className="card-article-title">{title}</h3>
            <p className="card-article-author">{author}</p>
            <div className="card-article-categories">
              {Array.isArray(categories) &&
                categories.map((category, index) => (
                  <p className="card-article-category">{category.name}</p>
                ))}
            </div>
            <p className="card-article-excerpt">
              {excerpt.substring(0, 80) + "..."}
            </p>
            <Link href={`/articles/${slug}`} className="btn">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
