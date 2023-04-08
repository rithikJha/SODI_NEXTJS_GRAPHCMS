import React from "react";
import { ArticleCard } from ".";

const Articles = ({ allArticles }) => {
  return (
    <div>
      <div className="cards">
        {" "}
        {Array.isArray(allArticles) &&
          allArticles.map((article, index) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              slug={article.slug}
              date={article.createdAt}
              image={article.featuredImage.url}
              content={article.content.html}
              excerpt={article.excerpt}
              categories={article.categories}
              author={article.author.name}
              classification={article.classification}
            />
          ))}{" "}
      </div>
    </div>
  );
};

export default Articles;
