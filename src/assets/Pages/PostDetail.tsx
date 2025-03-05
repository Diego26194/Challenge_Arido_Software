import { useParams } from "react-router-dom";
import { Container, Typography, CircularProgress, List, Paper } from "@mui/material";
import ItemComment from "../../Components/ItemComment";
import { useFetchPosts, useFetchUserById, useFetchCommentsByPostId } from "../../Functions/DataManaggement";


const PostDetail = () => {
  const { id } = useParams<{ id: string }>(); 

  const { data: posts, loading: loadingPost, error: errorPost } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");
  const { data: user, loading: loadingUser, error: errorUser } = useFetchUserById(Number(id));
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
      <Typography variant="h4" gutterBottom>{post?.title}</Typography>
      <Typography variant="subtitle1" color="textSecondary">Autor: {user?.name}</Typography>
      <Typography paragraph>{post?.body}</Typography>

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
