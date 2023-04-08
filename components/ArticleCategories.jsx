import React from "react";
//import { getCategories } from '@/services'
const ArticleCategories = ({ categories }) => {
  return (
    <div className="category-card">
      <div className="category-card-header">
        <h3>Popular Categories</h3>
      </div>
      <div className="category-card-list">
        {Array.isArray(categories) &&
          categories.map((category) => (
            <a href={`/categories/${category.slug}`}>
              <p className="article-category">{category.name}</p>
            </a>
          ))}
      </div>
    </div>
  );
};

export default ArticleCategories;
