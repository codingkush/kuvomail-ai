import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
  },
  // you can add more overrides here
});

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL,
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate Email reply. Please try again!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const currentYear = new Date().getFullYear();

  return (


    <ThemeProvider theme={theme}>

      <>
        <Container maxWidth="md" className="app-container">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className="header-text"
          >
            KuvoMail AI
          </Typography>
          <Typography
            variant="subtitle1"
            className="tagline-text"
          >
            Reply with precision.
          </Typography>

          <Box className="input-section">
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              label="Original Email Content"
              value={emailContent || ""}
              onChange={(e) => setEmailContent(e.target.value)}
              className="email-input"
            />

            <FormControl fullWidth className="tone-select" sx={{ mt: 3 }}>
              <InputLabel className="input-label">Tone (optional)</InputLabel>
              <Select
                value={tone || ""}
                label="Tone (Optional)"
                onChange={(e) => setTone(e.target.value)}
                className="select-box"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>

            <Button
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              fullWidth
              className="generate-button"
              sx={{ mt: 3 }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Generate Reply"
              )}
            </Button>
          </Box>

          {error && (
            <Typography color="error" sx={{ mb: 2, mt: 2 }}>
              {error}
            </Typography>
          )}

          {generatedReply && (
            <Box className="reply-box" sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom className="reply-title">
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply || ""}
                inputProps={{ readOnly: true }}
                className="reply-content"
              />

              <Button
                variant="outlined"
                className="copy-button"
                sx={{ mt: 2 }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </Container>


        <Box component="footer" className="footer">
          © {currentYear} — Kush Gupta. Crafted with 💜 using React (frontend) and SpringBoot (backend).
        </Box>
      </>

    </ThemeProvider>
  );
}

export default App;
