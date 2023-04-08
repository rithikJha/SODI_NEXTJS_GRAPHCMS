import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { head_logo } from "@/components/image";
import { getAllArticles, getRecentPosts, getCategories } from "@/services";
import {
  Carousel,
  Articles,
  ArticleWidget,
  ArticleCategories,
  Croshair,
} from "@/components";

export default function Home({ all_Articles, recent_posts, category_list }) {
  
  return (
    <>
      <Head>
        <title>SODI Network</title>
        <link rel="icon" href={head_logo} />
      </Head>
      <div className="any-page">
        <div className="any-page-left">
          <div className="any-page-heading">
            <h1>Read Now</h1>
          </div>
          <Croshair articles={all_Articles} />

          <div className="any-page-heading">
            <h1>Latest</h1>
          </div>
          <Articles allArticles={all_Articles} />
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
            <ArticleCategories categories={category_list} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const all_Articles = (await getAllArticles()) || [{ posts: [] }];
  const recent = await getRecentPosts();
  const categories = await getCategories();
  return {
    props: {
      all_Articles: all_Articles,
      recent_posts: recent,
      category_list: categories,
    },
    revalidate: 10,
  };
}
