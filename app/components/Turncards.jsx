import React, { useState } from "react";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

const Turncards = ({ flashcard, index }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Box
            sx={{
              perspective: "1000px",
              "& > div": {
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
                position: "relative",
                width: "100%",
                height: "200px",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              },
            }}
          >
            <div>
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  boxSizing: "border-box",
                  backgroundColor: "background.paper",
                }}
              >
                <Typography variant="h6" component="div">
                  {flashcard.front}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  boxSizing: "border-box",
                  backgroundColor: "background.paper",
                  transform: "rotateY(180deg)",
                }}
              >
                <Typography variant="h6" component="div">
                  {flashcard.back}
                </Typography>
              </Box>
            </div>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Turncards;
