import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeletePostProps {
  postId: number;
  onDelete: (id: number) => void;
}

const DeletePost = ({ postId, onDelete }: DeletePostProps) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      onDelete(postId); 
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  return (
    <IconButton onClick={handleDelete} size="small" color="error">
        <DeleteIcon fontSize="small" />
    </IconButton>
  );
};

export default DeletePost;
