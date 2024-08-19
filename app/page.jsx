"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Frontcards from "./components/Frontcards";
import Footer from "./components/Footer";
import Pricecards from "./components/Pricecards";
import AboutUs from "./components/Aboutus";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          minHeight: '55vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ color: '#936DFF', fontWeight: 'bold', marginBottom: '10px' }}
        >
          LearnMate
        </Typography>

        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '20px',
            fontSize: { xs: '2.5rem', md: '3.75rem' },
          }}
        >
          The ultimate flashcard tool.
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            marginBottom: '30px',
            fontSize: '1.125rem',
            color: '#ccc',
          }}
        >
          Join over 75k+ students and ace your next test with <br /> AI-flashcards from LearnMate.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#936DFF',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            ':hover': {
              backgroundColor: '#7d5acc',
            },
          }}
        >
          Get Started with LearnMate
        </Button>
      </Box>
      <AboutUs/>
      <Frontcards />
      <Pricecards />
      <Footer />
    </Box>
  );
}