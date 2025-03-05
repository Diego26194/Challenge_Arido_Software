import { ListItem, ListItemText } from "@mui/material";

interface PostProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

function ItemPost({ post }: PostProps) {
  return (
    <ListItem divider>
      <ListItemText primary={post.title} secondary={post.body} />
    </ListItem>
  );
}

export default ItemPost;
