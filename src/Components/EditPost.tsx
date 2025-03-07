import { useState } from "react";
import axios from "axios";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import ButtonEdit from "./ButtonEdit"; 

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
  open: boolean;
  onClose: () => void;
}

const EditPost: React.FC<EditPostProps> = ({ posts, post, apiUrl, onUpdate, open, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    const updatedPost = { ...post, title, body };

    try {
      await axios.put(`${apiUrl}/${post.id}`, updatedPost);
      const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
      onUpdate(updatedPosts);
      onClose();
    } catch (error) {
      console.error("Error al actualizar el post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Publicación</DialogTitle>
      <DialogContent>
        <TextField fullWidth margin="dense" label="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField fullWidth margin="dense" label="Contenido" multiline rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>Cancelar</Button>
        <ButtonEdit onClick={handleSave} />
      </DialogActions>
    </Dialog>
  );
};

export default EditPost;

