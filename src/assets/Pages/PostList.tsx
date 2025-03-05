import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper } from "@mui/material";
import ItemPost from "../../Components/ItemPost";
import { useFetchPosts } from "../../Functions/DataManaggement";





const PostList = () => {
  //Function to get the posts
  const { data: posts, loading: loadingPosts, error: errorPosts } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");


  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      {loadingPosts ? <CircularProgress /> : (
        <List component={Paper} sx={{ bgcolor: "background.paper" }}>
          {posts && posts.map((post) => (
            <ItemPost key={post.id} post={post} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default PostList;
