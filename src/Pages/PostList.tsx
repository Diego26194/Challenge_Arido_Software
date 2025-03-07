import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography, Container, CircularProgress, Paper, Button,} from "@mui/material";
import { useFetchPosts } from "../Functions/DataManagement";
import SearchBar from "../Components/Elements/SearchBar";
import { Link } from "react-router-dom";
import PostOptionsMenu from "../Components/Elements/PostOptionsMenu";
import AddPost from "../Components/Actions/AddPost";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const { data: posts, loading: loadingPosts } = useFetchPosts(apiUrl);

  const [searchTerm, setSearchTerm] = useState("");
  const [postsState, setPostsState] = useState<Post[]>([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  useEffect(() => {
    if (posts) {
      setPostsState(posts);
    }
  }, [posts]);

  // Filtering for search
  const filteredPosts = postsState.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Button variant="contained" onClick={() => setOpenAddDialog(true)} sx={{ mb: 2 }}>
        Agregar Post
      </Button>

      {loadingPosts ? (
        <CircularProgress />
      ) : (
        <List component={Paper} sx={{ bgcolor: "background.paper" }}>
          {filteredPosts.map((post) => (
            <ListItem key={post.id} divider sx={{ position: "relative" }} secondaryAction={
              <PostOptionsMenu 
                posts={postsState} 
                post={post} 
                apiUrl="https://jsonplaceholder.typicode.com/posts"
                onUpdate={setPostsState} 
              />
            }
            >
              <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText 
                  primary={post.title} 
                  secondary={post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body} 
                />
              </Link>
              
            </ListItem>
          ))}
        </List>
      )}

      <AddPost 
        open={openAddDialog} 
        onClose={() => setOpenAddDialog(false)}
        posts={postsState}
        apiUrl={apiUrl}
        onUpdate={setPostsState}
      />
    </Container>
  );
};

export default PostList;
