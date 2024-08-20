import Navbar from "../../components/Navbar";
import { SignUp } from "@clerk/nextjs";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";


export default function SignUpPage() {
  return (
    <Box>
       <AppBar position="static" sx={{ backgroundColor: "#1F2937" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              Learn Mate
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Sign In
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
          Sign Up
        </Typography>


        <Box sx={{ width: "100%", maxWidth: "400px" }}>
          <SignUp />
        </Box>
      </Box>
    </Box>
  );
}
