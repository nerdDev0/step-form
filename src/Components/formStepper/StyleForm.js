import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#333",
    direction: "rtl",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

function StyleForm({ children }) {
  return (
    <Box>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "auto",
              alignItems: "center",
              gap: "13px",
            }}
            dir="rtl"
          >
            {children}
          </div>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}

export { StyleForm, CssTextField };
