import React, { memo } from "react";
import { Grid, Typography } from "@mui/material";
import Next from "../../../assets/images/Next.png";
import Sort from "../../../assets/images/Sort.png";
import "./PathHeader.css";

const PathHeader = memo(({ pathName, pathHeading, featureSort }) => {
  return (
    <Grid data-testId="pathComponent" container className="pathHeaderWrapper">
      <Grid>
        <Typography data-testId="pathName">
          <span data-testId="home" className="homePath">
            Home /{" "}
          </span>
          <span className="categoryPath">{pathName}</span>
        </Typography>
        <Typography
          data-testId="pathHeading"
          variant="h3"
          className="catHeading"
        >
          {pathHeading}
        </Typography>
      </Grid>
      {featureSort ? (
        <Grid data-testId="featureFilter" className="featureFilter">
          <img className="sortImg" src={Sort} alt="Sort" />
          Feature
          <img className="sortImg" src={Next} alt="next" />
        </Grid>
      ) : null}
    </Grid>
  );
});

export default PathHeader;
