import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper } from "@mui/material";
import { useFetchPosts } from "../Functions/DataManagement";
import SearchBar from "../Components/SearchBar"; 
import { Link } from "react-router-dom";
import PostOptionsMenu from "../Components/PostOptionsMenu"; 

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  //Function to get the posts
  const { data: posts, loading: loadingPosts, error: errorPosts } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");

  const [searchTerm, setSearchTerm] = useState(""); 
  const [postsState, setPostsState] = useState<Post[]>([]);

  useEffect(() => {
    if (posts) {
      setPostsState(posts);
    }
  }, [posts]);

  //Function search Bar
  const filteredPosts = postsState.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loadingPosts ? <CircularProgress /> : (
        <List component={Paper} sx={{ bgcolor: "background.paper" }}>
          {filteredPosts.map((post) => (
            <ListItem key={post.id} divider sx={{ position: "relative" }} secondaryAction={
              <PostOptionsMenu 
                posts={postsState} 
                post={post} 
                apiUrl="https://jsonplaceholder.typicode.com/posts"
                onUpdate={setPostsState} 
              />
            }>
              <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText 
                  primary={post.title} 
                  secondary={post.body.substring(0, 100) + "..."} 
                />
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default PostList;
