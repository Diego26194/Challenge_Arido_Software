
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import theme from "./Themes/theme";
import PostList from "./assets/Pages/PostList";
import PostDetail from "./assets/Pages/PostDetail";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<Router>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
</Router>
</ThemeProvider>
  );
}

export default App;
