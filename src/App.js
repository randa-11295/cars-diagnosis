import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./utils/theme";
import { AppRouter } from "./routes";
import { Box } from "@mui/system";

const customTheme = createTheme(theme);

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          bgcolor: "colors.background",
          color: "colors.text",
        }}
      >
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}
