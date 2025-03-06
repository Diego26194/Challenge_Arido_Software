import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper } from "@mui/material";
import { useFetchPosts } from "../Functions/DataManagement";
import SearchBar from "../Components/SearchBar"; 
import { Link } from "react-router-dom";
import EditPost from "../Components/EditPost"; 
import DeletePost from "../Components/DeletePost";

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

  const handleDeletePost = (id: number) => {
    setPostsState((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loadingPosts ? <CircularProgress /> : (
        <List component={Paper} sx={{ bgcolor: "background.paper" }}>
          {filteredPosts.map((post) => (
            <ListItem key={post.id} divider sx={{ position: "relative" }}>
              <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText 
                  primary={post.title} 
                  secondary={post.body.substring(0, 100) + "..."} 
                />
              </Link>
              <EditPost 
                posts={postsState} 
                post={post} 
                apiUrl="https://jsonplaceholder.typicode.com/posts"
                onUpdate={setPostsState}
              />
              <DeletePost postId={post.id} onDelete={handleDeletePost} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default PostList;
