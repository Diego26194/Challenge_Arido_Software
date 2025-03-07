import { useParams } from "react-router-dom";
import { Container, Typography, CircularProgress, List, Paper, Box } from "@mui/material";
import ItemComment from "../Components/ItemComment";
import { useFetchPosts, useFetchUserById, useFetchCommentsByPostId } from "../Functions/DataManagement";


const PostDetail = () => {
  const { id } = useParams<{ id: string }>(); 

  //Function to get the posts
  const { data: posts, loading: loadingPost, error: errorPost } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");
  // Function to get a user by ID
  const { data: user, loading: loadingUser, error: errorUser } = useFetchUserById(Number(id));
  // Function to get the comments by ID
  const { data: comments, loading: loadingComments, error: errorComments } = useFetchCommentsByPostId(Number(id));

  // Find post for id
  const post = posts?.find((post) => post.id === Number(id));
  
  if (loadingPost || loadingUser || loadingComments) {
    return <CircularProgress />;
  }

  if (errorPost || errorUser || errorComments) {
    return <Typography color="error">Error al cargar los datos</Typography>;
  }

  if (!post) return <Typography>No se encontró el post</Typography>;

  return (
    <Container>
      <Box sx={{ backgroundColor: "#B9C29E", p: 2, borderRadius: 2 }} >
        <Typography variant="h3" gutterBottom >{post?.title} </Typography>
        <Typography variant="subtitle1" color="textSecondary">Autor: {user?.name}</Typography>
        <Typography paragraph>{post?.body}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom>Comentarios</Typography>
      <List component={Paper} sx={{ bgcolor: "background.paper" }}>
        {comments?.map((comment) => (
          <ItemComment key={comment.id} comment={comment} />
        ))}
      </List>
    </Container>
  );
};

export default PostDetail;
