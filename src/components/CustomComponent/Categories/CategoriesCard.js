import { Grid, Typography } from "@mui/material";
import React from "react";
import "./CategoriesCard.css";

function CategoriesCard({ name, image }) {
  return (
    <Grid data-testid="categoryComponent" md={2} className="card">
      <img
        src={`${process.env.REACT_APP_Website}${image}`}
        // src={image}
        className="categoiesFood"
        alt="food"
      />
      <Typography variant="p" className="foodName">
        {name}
      </Typography>
    </Grid>
  );
}

export default CategoriesCard;
