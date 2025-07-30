import { Container, Typography, Stack, IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ color: '#fff', mb: 2 }} fontFamily="Space Grotesk">
          Contact Me
        </Typography>
        <Typography sx={{ color: '#ccc', mb: 2 }} fontFamily="Space Grotesk">
          Feel free to reach out for any opportunities or collaborations. I’ll try to respond as soon as possible!
        </Typography>
        <Box sx={{ color: '#fff', mb: 2 }}>
          📧 Email: <a href="mailto:kulesha8@email.com">kulesha8@email.com</a><br />
          🌍 Based in: Sweden
        </Box>
        <Stack direction="row" spacing={2}>
          <IconButton href="https://github.com/KuleshaDmytro" target="_blank" sx={{ color: '#fff' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/kuleshadmytro/" target="_blank" sx={{ color: '#fff' }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
