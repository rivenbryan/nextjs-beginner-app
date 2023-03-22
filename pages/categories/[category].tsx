import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface CategoryNewsPageProps {
  newsArticles: NewsArticle[];
}

// We need this because this page is dynamic url -> multiply paths available
export const getStaticPaths: GetStaticPaths = async () => {
  const catagoryRelativeURL = [
    "business",
    "entertainment",
    "generalhealth",
    "science",
    "sports",
    "technology",
  ];

  // Values to return back has to be an array of object
  const paths = catagoryRelativeURL.map((relativeURL) => ({
    params: { category: relativeURL },
  }));

  // Return paths
  return {
    paths,
    // Fallback false implies that if the path user input is not in the path -> return false
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({
  params,
}) => {
  const category = params?.category?.toString();
  console.log(category);
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=" +
      category +
      "&apiKey=" +
      process.env.NEWS_API_KEY
  );
  const newsResponse: NewsResponse = await response.json();
    
  return {
    props: { newsArticles: newsResponse.articles },
  };
};

export default function CategoryNewsPage({
  newsArticles,
}: CategoryNewsPageProps) {
  const router = useRouter();
  const categoryName = router.query.category?.toString();

  const title = "Category:" + categoryName;

  return (
    <>
      <Head>
        <title key="title">{title + "- NextJS News App"}</title>
      </Head>
      <main>
        <h1>{title}</h1>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}
