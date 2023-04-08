import React, { useEffect, useState } from "react";
import {
  getAllArticles,
  getCategories,
  getOneArticle,
  getRecentPosts,
  getSimilarPosts,
} from "@/services";
import {
  ArticleDetails,
  ArticleWidget,
  ArticleCategories,
  Author,
  Loader,
} from "@/components";
import { useRouter } from "next/router";

const FullArticle = ({ post, recent_posts, category_list }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [relatedPosts, setRelatedPosts] = useState([]);

  const myCat = post.categories.map((category) => category.slug);
  useEffect(() => {
    getSimilarPosts(myCat, post.slug).then((result) => {
      setRelatedPosts(result);
    });
  }, [post.slug]);

  return (
    <div className="any-page">
      <div className="any-page-left">
        <title>{post.title}</title>
        <ArticleDetails allDetails={post} />
        <Author authorInfo={post.author} />
      </div>

      <div className="any-page-right">
        <div className="any-page-heading">
          <h1>Explore</h1>
        </div>
        <div className="article-widget">
          <ArticleWidget
            PostsToShow={relatedPosts}
            titleToShow="Related Posts"
          />
        </div>
        <div className="article-categories">
          <ArticleCategories categories={category_list} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const data = await getOneArticle(params.slug);
  const recent = await getRecentPosts();
  const categories = await getCategories();

  return {
    props: { post: data, recent_posts: recent, category_list: categories },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const all_Articles = await getAllArticles();
  console.log(all_Articles[0].slug);
  return {
    paths: all_Articles.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default FullArticle;
