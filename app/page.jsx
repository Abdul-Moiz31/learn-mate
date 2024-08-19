"use client";
import { Box, Button, Container, Divider, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Frontcards from "./components/Frontcards";
import Footer from "./components/Footer";
import Pricecards from "./components/Pricecards";
import Image from "next/image";
import { keyframes } from "@emotion/react";

// Keyframe for floating animation
const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`;

// Keyframe for hero text animation
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function Home() {
  // Determine screen size
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      <Navbar />
      <Container>
        <Box
          display={"flex"}
          flexDirection={isSmallScreen ? "column" : "row"}
          alignItems={"center"}
          justifyContent={isSmallScreen ? "center" : "space-between"}
          paddingTop={"4%"}
          textAlign={isSmallScreen ? "center" : "left"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            sx={{ animation: `${slideIn} 1s ease-out` }}
          >
            <Typography variant={isSmallScreen ? "h3" : "h1"} gutterBottom>
              Rise to <br /> Challenge
            </Typography>
            <Typography variant={isSmallScreen ? "h4" : "h3"}>
              Flashcards for{" "}
              <span style={{ fontWeight: 600 }}>Future Engineers.</span>
            </Typography>
            <Box
              display={"flex"}
              flexDirection={isSmallScreen ? "column" : "row"}
              gap={"1rem"}
              paddingTop={5}
            >
              <Link href="/generate">
                <Button variant="contained" fullWidth={isSmallScreen}>Get Started</Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outlined" fullWidth={isSmallScreen}>View Pricing</Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ animation: `${float} 4s ease-in-out infinite`, mt: isSmallScreen ? 4 : 0 }}>
            <Image
              src="/images/hero_bg.png"
              alt="hero"
              width={isSmallScreen ? 250 : 320}
              height={isSmallScreen ? 250 : 320}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Container>
      <Frontcards />
      <Divider />
      <Box id="pricing">
        <Pricecards />
      </Box>
      <Footer />
    </Box>
  );
}
