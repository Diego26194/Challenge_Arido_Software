import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress,} from "@mui/material";
import axios from "axios";

interface AddPostProps {
  open: boolean;
  onClose: () => void;
  posts: any[];
  apiUrl: string;
  onUpdate: (updater: (prevPosts: any[]) => any[]) => void;
}

const AddPost: React.FC<AddPostProps> = ({ open, onClose, posts, apiUrl, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!title || !body) return;

    const newId = posts.reduce((max, post) => (post.id > max ? post.id : max), 0) + 1;
    const newPost = { id: newId, title, body };

    setLoading(true);

    try {
      await axios.post(apiUrl, newPost); 
      onUpdate((prevPosts) => [...prevPosts, newPost]); 
      setTitle("");
      setBody("");
      onClose();
    } catch (error) {
      console.error("Error al agregar el post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agregar Nuevo Post</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Título"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Contenido"
          fullWidth
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>Cancelar</Button>
        <Button onClick={handleSave} disabled={loading} variant="contained">
          {loading ? <CircularProgress size={24} /> : "Guardar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPost;
