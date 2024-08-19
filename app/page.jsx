"use client";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Frontcards from "./components/Frontcards";
import Footer from "./components/Footer";
import Pricecards from "./components/Pricecards";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box
          height={"70vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingLeft={"15%"}
          paddingTop={"10%"}
        >
          <Typography variant="h1" gutterBottom>
            Rise to <br /> Challenge
          </Typography>
          <Typography variant="h3">
            Flashcards for{" "}
            <span style={{ fontWeight: 600 }}>Future Engineers.</span>
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"wrap"}
            gap={"1rem"}
            paddingTop={5}
          >
            <Link href="/generate">
              <Button variant="contained">Get Started</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="outlined">View Pricing</Button>
            </Link>
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