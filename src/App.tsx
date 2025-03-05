
import { ThemeProvider, CssBaseline } from "@mui/material";

import './App.css'
import theme from "./Themes/theme"; 


import PostList from "./Component/PostList";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <PostList />;
    </ThemeProvider>
    </>
  ) 
}

export default App;
