import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper } from "@mui/material";




interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  //search the post for IP
  useEffect(() => {
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      {loading ? <CircularProgress /> : (
        <List component={Paper} sx={{ bgcolor: "background.paper" }}>
          {posts.map((post) => (
            <ListItem key={post.id} divider>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default PostList;
