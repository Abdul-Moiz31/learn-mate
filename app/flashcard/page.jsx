"use client";

import { db } from "/firebase";
import { useUser } from "@clerk/nextjs";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { collection, doc, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Frontcards from "../components/Frontcards";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Turncards from "../components/Turncards";

export default function Flashcard() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, router, user]);

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;

      const colRef = collection(doc(collection(db, "users"), user.id), search);
      const docs = await getDocs(colRef);
      const flashcards = [];
      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });
      setFlashcards(flashcards);
    }
    getFlashcard();
  }, [search, user]);

  if (!isLoaded && !isSignedIn) return <Loader />;

  return (
    <Box>
      <Navbar />
      <Container maxWidth="md ">
      <Typography variant="h2" sx={{ my: 4 }}>
          {search}
        </Typography>
      {flashcards.length === 0 && (
        <Paper
          sx={{
            p: 4,
            align: "center",
          }}
        >
          <Typography variant="p" component="div">
            You don&apos;t have any flashcards of {search}. <br /> To create
            one, go to the <Link href="/generate">Create Flashcard</Link> page.{" "}
            <br /> To view the flashcards, go to the{" "}
            <Link href="/flashcards">My Flashcards</Link> page.
          </Typography>
        </Paper>
      )}
        <Grid container spacing={3} my={4}>
          {flashcards.map((flashcard, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Turncards flashcard={flashcard} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}