import Head from "next/head"
import {Typography} from "@mui/material";
import { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import NewsArticleEntry from "@/components/NewsArticleEntry";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";


interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY)
  const newsResponse: NewsResponse = await response.json()
  return {
    props: { newsArticles: newsResponse.articles}
  }
  // Error goes to page 500
}

export default function BreakingNewsPage({newsArticles} : BreakingNewsPageProps) {
  return (
    <>
    <Head>
      <title>Breaking News - NextJS News App</title>
    </Head>
      <main >
           <Typography variant="h2">Breaking News</Typography>
            <NewsArticlesGrid articles={newsArticles}/>
      </main>
    </>
  )
}
