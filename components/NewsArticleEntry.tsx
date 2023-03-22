import React from 'react'
import { NewsArticle } from '@/models/NewsArticles'
import { Card, CardContent, Typography, Box } from '@mui/material'
type newsArticleProps = {
    article: NewsArticle
}

export default function NewsArticleEntry({ article: {title, description, url, urlToImage}}: newsArticleProps) {
  return (
    <Card>
        <CardContent>
            <Box sx= {{height: 250}} component={"img"} src={urlToImage}>
            </Box>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </CardContent>
    </Card>
  )
}