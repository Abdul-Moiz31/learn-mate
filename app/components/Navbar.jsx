"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Appbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#1f2937" ,position:"relative"}} >
    
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box flexGrow={1} display="flex" >
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Learn Mate 
            </Typography>
          </Link>
        </Box>

        <Box display="flex" gap={3}>
          <SignedOut>
            <Button color="inherit" href="/sign-in" variant="text">
              Sign In
            </Button>
            <Button color="inherit" href="/sign-up" variant="text">
              Register
            </Button>
          </SignedOut>
          <SignedIn>
            <Button color="inherit" href="/flashcards" variant="text">
              Decks
            </Button>
            <UserButton />
          </SignedIn>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
