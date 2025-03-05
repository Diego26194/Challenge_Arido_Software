import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import theme from "./Themes/theme";
import PostList from "./Pages/PostList";
import PostDetail from "./Pages/PostDetail";
import ToolBar from "./Components/ToolBar";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<Router>
  <ToolBar LinkHome="/" />

  {/* Contenido de la aplicación */}
  <Box sx={{ marginTop: "64px", padding: "16px" }}>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  </Box>
</Router>
</ThemeProvider>
  );
}

export default App;
