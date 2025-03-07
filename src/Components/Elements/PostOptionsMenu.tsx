import { useState } from "react";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditPost from "../Actions/EditPost";
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

  // Handle click on the menu icon to open it
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Open the edit modal and close the menu
  const handleEditClick = () => {
    setEditOpen(true);
    handleClose();
  };

  // Handles the logic for deleting a post
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
