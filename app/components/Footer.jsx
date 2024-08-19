"use client";

import React from "react";
import { Box, Typography, Link, Container, Grid, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "#000",
        color: "#E5E5E5",
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#936DFF" }}>
             LearnMate
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              The ultimate flashcard tool for students, designed to help you succeed.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#936DFF" }}>
              Links
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block", mb: 1 }}>
                Home
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block", mb: 1 }}>
                Features
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block", mb: 1 }}>
                Pricing
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block" }}>
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#936DFF" }}>
              Contact Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: "#E5E5E5" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com" target="_blank" sx={{ color: "#E5E5E5" }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="mailto:support@omnisets.com" sx={{ color: "#E5E5E5" }}>
                <EmailIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Email: support@LearnMate.com
            </Typography>
            <Typography variant="body2">
              Address: 123 Learning Ave, Knowledge City
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #333", pt: 3 }}>
          <Typography variant="body2" sx={{ color: "#936DFF" }}>
            &copy; {new Date().getFullYear()} LearnMate. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}