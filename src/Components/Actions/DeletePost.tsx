import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeletePostProps {
  posts: any[];
  post: any;
  apiUrl: string;
  onUpdate: (updatedPosts: any[]) => void;
}

const DeletePost = ({ posts, post, apiUrl, onUpdate }: DeletePostProps) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/${post.id}`);

      
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      onUpdate(updatedPosts);
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  return (
    <IconButton onClick={handleDelete} color="error">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeletePost;

