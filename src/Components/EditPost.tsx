import { useState } from "react";
import axios from "axios";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface EditPostProps {
  posts: Post[];
  post: Post;
  apiUrl: string;
  onUpdate: (updatedPosts: Post[]) => void;
}

const EditPost: React.FC<EditPostProps> = ({ posts, post, apiUrl, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    setLoading(true);
    const updatedPost = { ...post, title, body };

    try {
      await axios.put(`${apiUrl}/${post.id}`, updatedPost);
      const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
      onUpdate(updatedPosts);
      handleClose();
    } catch (error) {
      console.error("Error al actualizar el post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen} size="small">
        <EditIcon fontSize="small" />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Publicación</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField fullWidth margin="dense" label="Contenido" multiline rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>Cancelar</Button>
          <Button onClick={handleSave} color="primary" disabled={loading}>
            {loading ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditPost;

