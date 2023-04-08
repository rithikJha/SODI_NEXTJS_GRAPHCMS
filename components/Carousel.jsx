import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Carousel = ({
  articles,
  articlesPerSlide = 6,
  autoScrollInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - articlesPerSlide ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - articlesPerSlide : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, autoScrollInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-content">
          {articles
            .slice(1, 7)
            .slice(currentIndex, currentIndex + articlesPerSlide)
            .map((article) => (
              <a href={`/articles/${article.slug}`}>
                <div key={article.id} className="carousel-card">
                  <img
                    className="carousel-card-image"
                    src={article.featuredImage.url}
                    alt={article.title}
                  />
                  <div className="carousel-card-overlay">
                    <h1 className="carousel-card-title">{article.title}</h1>
                    <p className="carousel-card-author">
                      {article.author.name}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-button left" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i> {/* Icon for "prev" */}
          </button>
          <button className="carousel-button right" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i> {/* Icon for "next" */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
