"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Toolbar, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

const Appbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: "#000000", 
        boxShadow: "none", 
        padding: { xs: '10px 20px', md: '20px 40px' } 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side - Logo and Navigation Links */}
        <Box display="flex" alignItems="center" gap={4}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "#936DFF", fontWeight: "bold", fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              LearnMate
            </Typography>
          </Link>
          <Link href="/explore" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#D3D3D3", display: { xs: "none", md: "block" }, fontSize: { xs: '1rem', md: '1.125rem' } }}>
              Explore
            </Typography>
          </Link>
        </Box>

        {/* Center - Search Bar */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: "center", 
            backgroundColor: "#333333", 
            borderRadius: "25px", 
            px: 2, 
            py: 0.5, 
            width: "40%" 
          }}
        >
          <IconButton sx={{ color: "#888888" }}>
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            placeholder="Search library..."
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#D3D3D3",
              outline: "none",
              width: "100%",
              padding: "5px 0",
            }}
          />
        </Box>

        {/* Right Side - Authentication and User Actions */}
        <Box display="flex" gap={2} alignItems="center">
          <SignedOut>
            <Link href="/sign-in">
              <Button sx={{ color: "#D3D3D3", textTransform: "none", fontSize: { xs: '0.875rem', md: '1rem' } }} variant="text">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                sx={{
                  color: "#D3D3D3",
                  backgroundColor: "#222222",
                  border: "1px solid #888888",
                  textTransform: "none",
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  padding: { xs: '5px 10px', md: '10px 20px' },
                  "&:hover": {
                    backgroundColor: "#936DFF",
                  },
                }}
                variant="outlined"
              >
                Register
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/flashcards">
              <Button sx={{ color: "#D3D3D3", textTransform: "none", fontSize: { xs: '0.875rem', md: '1rem' } }} variant="text">
                Decks
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;