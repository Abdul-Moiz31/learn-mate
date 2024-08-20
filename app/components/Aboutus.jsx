"use client";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#D3D3D3",
        padding: { xs: "50px 20px", md: "70px 80px" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Content on the Left */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                color: "#936DFF", // Purple color matching the provided image
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "2.5rem" },
                marginBottom: "20px",
              }}
            >
              About Us
            </Typography>

            <Divider
              sx={{
                width: "60px",
                height: "4px",
                backgroundColor: "#936DFF",
                marginBottom: "40px",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              LearnMate is a revolutionary platform dedicated to transforming the way
              students and professionals create, study, and master complex subjects.
              Our tools are designed with innovation in mind, providing users with
              an intuitive experience tailored to their educational needs.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.8,
              }}
            >
              Join the thousands who trust LearnMate as their go-to learning platform.
              With our cutting-edge technology and commitment to excellence, the
              future of education is in your hands.
            </Typography>
          </Grid>

          {/* Image on the Right */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "80vh",
                borderRadius: "8px",
                backgroundImage: "url('./robo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </Box>
          </Grid> 
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
