import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper } from "@mui/material";
import ItemPost from "../Components/ItemPost";
import { useFetchPosts } from "../Functions/DataManaggement";
import SearchBar from "../Components/SearchBar"; // Importa el nuevo componente





const PostList = () => {
  //Function to get the posts
  const { data: posts, loading: loadingPosts, error: errorPosts } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");

  const [searchTerm, setSearchTerm] = useState(""); 
  // Filter Posts
  const filteredPosts = posts ? posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loadingPosts ? <CircularProgress /> : (
        <List component={Paper} sx={{ bgcolor: "background.paper" }}>
          {filteredPosts.map((post) => (
            <ItemPost key={post.id} post={post} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default PostList;
