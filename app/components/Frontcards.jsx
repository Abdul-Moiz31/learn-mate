"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Frontcards = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#D3D3D3",
        padding: { xs: "50px 20px", md: "70px 80px" },
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: "#A020F0", // Purple color matching the provided image
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "2.5rem" },
            marginBottom: "40px",
          }}
        >
          Features
        </Typography>

        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#1a1a1a", // Dark card background
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100px", // Ensures all cards have the same minimum height
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#D3D3D3", marginBottom: "16px" }}
              >
                Easy Prompt Input
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#9395a1", lineHeight: 1.6 }}
              >
                Quickly generate flashcards from simple text prompts. Streamline
                your study process with ease.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#1a1a1a", // Dark card background
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100px", // Ensures all cards have the same minimum height
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#D3D3D3", marginBottom: "16px" }}
              >
                Smart Flashcards
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#9395a1", lineHeight: 1.6 }}
              >
                Sync your flashcards and study progress across devices, allowing
                you to study anytime, anywhere.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#1a1a1a", // Dark card background
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "150px", // Ensures all cards have the same minimum height
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#D3D3D3", marginBottom: "16px" }}
              >
                Flashcards Generated in Minutes
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#9395a1", lineHeight: 1.6 }}
              >
                Customize and create flashcards with in minutes. Focus on your learning
                with minimal effort.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Frontcards;