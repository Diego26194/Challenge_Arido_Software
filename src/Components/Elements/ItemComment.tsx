import { ListItem, ListItemText } from "@mui/material";

interface CommentProps {
    comment: {
    id: number;
    name: string;
    body: string;
  };
}

function ItemComment({ comment }: CommentProps) {
  return (
    <ListItem divider>
      <ListItemText primary={comment.name} secondary={comment.body} />
    </ListItem>
  );
}

export default ItemComment;
