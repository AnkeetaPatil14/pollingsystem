import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Student from "./components/Student";
import Teacher from "./components/Teacher";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#7765DA",
      },
      secondary: {
        main: "#9c27b0",
      },
      customColor: {
        main: "#ff5722",
        contrastText: "#fff",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 50, // ✅ now it works
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<Student />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
