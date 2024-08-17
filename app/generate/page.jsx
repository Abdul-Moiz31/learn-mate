"use client";

import { useUser } from "@clerk/nextjs";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "/firebase";
import Navbar from "../components/Navbar";
import Frontcards from "../components/Frontcards";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, router, user]);

  const handleSubmit = async () => {
    setLoadings(true);
    fetch("/api/generate", {
      method: "POST",
      body: text,
    })
    .then((res) => res.json())
    .then((data) => {
      setFlashcards(data);
      setLoadings(false);
      });
  };

  const saveFlashcards = async () => {
    if (!name) {
      alert("Please enter a name for your flashcards.");
      return;
    }

    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || [];
      if (collections.find((f) => f.name === name)) {
        alert("Flashcards with the same name already exists.");
        return;
      } else {
        collections.push({ name });
        batch.set(userDocRef, { flashcards: collections }, { merge: true });
      }
    } else {
      batch.set(userDocRef, { flashcards: [{ name }] });
    }

    const colRef = collection(userDocRef, name);
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef);
      batch.set(cardDocRef, flashcard);
    });

    await batch.commit();
    router.push("/flashcards");
  };

  if (!isLoaded && !isSignedIn) return <Loader></Loader>;

  return (
    <Box>
      <Navbar />
      <Container maxWidth="md">
        <Box
          sx={{
            mt: 4,
            mb: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Generate Flashcards
          </Typography>
          <Paper
            sx={{
              p: 4,
              width: "100%",
              backgroundColor: (theme) => theme.palette.tangaroa[100],
            }}
          >
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Enter Text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              disabled={loadings}
            >
              Submit
            </Button>
          </Paper>

          {loadings && (
            <Box marginTop={4} align="center">
              <Typography variant="h6" component="h2" gutterBottom>
                Generating flashcards...
              </Typography>
              <CircularProgress align="center" sx={{ color: "text.primary" }} />
            </Box>
          )}

          {flashcards.length > 0 && (
            <Box sx={{ mt: 4, width: "100%" }}>
              <Typography variant="h3" component="h2" gutterBottom>
                Flashcards
              </Typography>
              <Box marginY={4} display={"flex"}>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Enter Name"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  size="large"
                  onClick={saveFlashcards}
                >
                  Save
                </Button>
              </Box>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {flashcards.map((flashcard, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Turncards flashcard={flashcard} index={index} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}