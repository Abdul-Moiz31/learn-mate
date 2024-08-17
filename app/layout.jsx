import { ClerkProvider } from "@clerk/nextjs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn MAte",
  description: "Generated your flashcard - Gemini",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          
        </body>
      </html>
    </ClerkProvider>
  );
}