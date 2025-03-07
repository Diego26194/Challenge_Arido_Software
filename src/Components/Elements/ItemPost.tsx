import { ListItem, ListItemText, Container } from "@mui/material";
import { Link } from "react-router-dom";

interface PostProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
  onUpdate: (updatedPost: { id: number; title: string; body: string }) => void;
  onDelete: (id: number) => void;
}

function ItemPost({ post, onUpdate, onDelete }: PostProps) {
  return (
    <Container>
      <ListItem key={post.id} divider >
        <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary={post.title} secondary={post.body.substring(0, 100) + "..."} />
        </Link>
      </ListItem>
    </Container>
  );
}

export default ItemPost;
