import { MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ButtonDeleteProps {
  onClick: () => void;
}

const ButtonDelete = ({ onClick }: ButtonDeleteProps) => {
  return (
    <MenuItem onClick={onClick}>
      <DeleteIcon fontSize="small" style={{ marginRight: 8 }} color="error"  />
      Eliminar
    </MenuItem>
  );
};

export default ButtonDelete;