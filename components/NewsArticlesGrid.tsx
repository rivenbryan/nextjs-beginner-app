import { NewsArticle } from '@/models/NewsArticles'
import { Grid } from '@mui/material'
import React from 'react'
import NewsArticleEntry from './NewsArticleEntry'

type NewsArticleGridProps = {
    articles: NewsArticle[]
}

export default function NewsArticlesGrid({articles}: NewsArticleGridProps) {
  return (
    <Grid container>
        {articles.map((article) => (
            <Grid item xs={6}>
                <NewsArticleEntry article={article}/>
            </Grid>
        ))}
    </Grid>
  )
}