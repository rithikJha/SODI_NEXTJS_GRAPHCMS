// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import React, { useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";

const Croshair = ({
  articles,
  articlesPerSlide = 7,
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

  return (
    <div className="carousel-container">
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            40: {
              spaceBetween: 30,
              slidesPerView: 1.2,
            },
            // when window width is >= 640px
            840: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1268: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }}
          style={{
            "--swiper-navigation-size": "35px",
          }}
          className="mySwiper"
        >
          <div className="carousel-content">
            {articles
              .slice(1, 7)
              .slice(currentIndex, currentIndex + articlesPerSlide)
              .map((article, i) => (
                <SwiperSlide key={i}>
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
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Croshair;
