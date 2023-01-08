import { Grid, Typography } from "@mui/material";
import React from "react";
import "./FarmCard.css";

const FarmCard = ({ image, name }) => {
  return (
    <Grid md={3} container flexDirection="column" alignItems="center">
      <img
        data-testId="farmLogo"
        src={`${process.env.REACT_APP_Website}/${image}`}
        // src={image}
        className="farmImage"
        alt="farm"
      />
      <Typography variant="p" className="farmText">
        {name}
      </Typography>
    </Grid>
  );
};

export default FarmCard;
