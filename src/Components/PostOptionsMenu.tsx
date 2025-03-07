import { useState } from "react";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditPost from "./EditPost";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

interface PostOptionsMenuProps {
  posts: any[];
  post: any;
  apiUrl: string;
  onUpdate: (updatedPosts: any[]) => void;
}

const PostOptionsMenu = ({ posts, post, apiUrl, onUpdate }: PostOptionsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [editOpen, setEditOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setEditOpen(true);
    handleClose();
  };

  const handleDeleteClick = async () => {
    handleClose(); 

    try {
      
      await fetch(`${apiUrl}/${post.id}`, { method: "DELETE" });

     
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      onUpdate(updatedPosts);
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <ButtonEdit onClick={handleEditClick} />
        <ButtonDelete onClick={handleDeleteClick} />
      </Menu>
      {editOpen && (
        <EditPost
          posts={posts}
          post={post}
          apiUrl={apiUrl}
          onUpdate={onUpdate}
          open={editOpen}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  );
};

export default PostOptionsMenu;
