import React, { FormEvent, useState } from "react";
import { NewsArticle } from "@/models/NewsArticles";
import { Button, TextField, Typography } from "@mui/material";
import { Spinner } from "react-bootstrap";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import Head from "next/head";
type Props = {};

export default function search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked handleSubmit!");
    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        const response = await fetch("/api/search-news?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
      }
    }
  };

  return (
    <>
    <Head>
      <title>Search News - NextJS News App</title>
    </Head>
    <main>
      <h1>Search news</h1>
      <Typography variant="subtitle1"></Typography>
      <TextField
        id="outlined-basic"
        label="E.g politics, sports, ..."
        variant="outlined"
        size="small"
        sx={{ width: "300px" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSubmit} sx={{ marginLeft: 1 }} variant="contained">
        Search
      </Button>

      {searchResultsLoadingIsError && (
        <Typography variant="subtitle1">
          {" "}
          Something went wrong.. Please try again
        </Typography>
      )}
      {searchResults?.length == 0 && (
        <Typography variant="subtitle1">
          {" "}
          Nothing found. Try a different query
        </Typography>
      )}
      {searchResults && <NewsArticlesGrid articles={searchResults} />}
    </main>
      </>
  );
}
