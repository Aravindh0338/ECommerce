import React from "react";
import PathHeader from "../CustomComponent/path-header/PathHeader";
import { Grid } from "@mui/material";
import Eggilious from "../../assets/images/eggillious.png";
import Fruity from "../../assets/images/fruity.png";
import Happiness from "../../assets/images/happiness.png";
import ShopNow from "../../assets/images/ShopNow.png";
import "./FeaturePromos.css";

function FeaturePromos() {
  return (
    <Grid rowGap={5} className="featurePromosWrapper">
      <PathHeader
        pathName="Featured Promos"
        pathHeading="Featured Promos"
        featureSort={false}
      />

      <Grid container md={12}>
        <Grid md={4}>
          <img src={Eggilious} alt="Eggilious" className="featurePromosImg" />
        </Grid>
        <Grid md={4}>
          <img src={Fruity} alt="Fruity" className="featurePromosImg" />
        </Grid>
        <Grid md={4}>
          <img src={Happiness} alt="Happiness" className="featurePromosImg" />
        </Grid>
      </Grid>
      <Grid>
        <img src={ShopNow} className="shopNowBanner" alt="Shop Now" />
      </Grid>
    </Grid>
  );
}

export default FeaturePromos;
