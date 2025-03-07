import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface ToolBarProps {
  LinkHome: string;
}

function ToolBar({ LinkHome }: ToolBarProps) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgba(185, 194, 158, 0.7)", width: "100%" }}>
      <Toolbar>
        <Link to={LinkHome} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontSize: "16px" }}>
            Inicio
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default ToolBar;

