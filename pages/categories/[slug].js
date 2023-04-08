import React, { useState, useEffect } from "react";
import {
  getAllArticles,
  getCategories,
  getCategoryPost,
  getOneArticle,
  getOneCategory,
  getRecentPosts,
  getSimilarPosts,
} from "@/services";
import {
  ArticleDetails,
  ArticleWidget,
  ArticleCategories,
  Author,
  Loader,
  Articles,
} from "@/components";
import { useRouter } from "next/router";

const CategoryPage = ({ posts, recent_posts, category_name, categories }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="any-page">
      <div className="any-page-left">
        <div className="any-page-heading">
          <h1>{category_name}</h1>
        </div>
        <Articles allArticles={posts} />
      </div>
      <div className="any-page-right">
        <div className="any-page-heading">
          <h1>Explore</h1>
        </div>
        <div className="article-widget">
          <ArticleWidget
            PostsToShow={recent_posts}
            titleToShow="Recent Posts"
          />
        </div>
        <div className="article-categories">
          <ArticleCategories categories={categories} />
        </div>
      </div>
    </div>
  );
};

// getOneCategory , getSimilarPosts

export async function getStaticProps({ params }) {
  const data = await getCategoryPost(params.slug);
  const recent = await getRecentPosts();
  const category = await getOneCategory(params.slug);
  const categories = await getCategories();

  return {
    props: {
      posts: data,
      recent_posts: recent,
      category_name: category.name,
      categories: categories,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default CategoryPage;
