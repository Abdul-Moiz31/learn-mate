import React from "react";
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/login" passHref>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      {/* Sign-In Section */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", my: 4 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <SignIn />
      </Box>
      {/* Sign-In Section */}
    </>
  );
}
