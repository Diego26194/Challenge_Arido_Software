import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper } from "@mui/material";
import ItemPost from "./ItemPost";
import DataManaggement from "../Functions/DataManaggement";



interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const { data: posts, loading, error } = DataManaggement<Post[]>("https://jsonplaceholder.typicode.com/posts");


  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      {loading ? <CircularProgress /> : (
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
