import { Grid } from "@mui/material";
import Offer from "../../assets/images/offer.png";
import PathHeader from "../CustomComponent/path-header/PathHeader";
import Cards from "../CustomComponent/Cards/Cards";
import MultiSideNav from "../CustomComponent/multisideNav/MultiSideNav";
import fetch from "../controllers/fetch";
import "./Deal.css";
import React, { useEffect, useState } from "react";

function Deal() {
  const [cart, setCart] = useState();

  const apiCall = async () => {
    let response;
    response = await fetch(process.env.REACT_APP_Cart_Details);
    setCart(response);
  };

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <Grid data-testId="deal" className="dealWrapper">
      <img
        data-testId="headerImg"
        src={Offer}
        className="dealImage"
        alt="Deal of The Day"
      />
      <Grid container md={12} gap={4}>
        <Grid md={2} sm={12} xs={12}>
          <MultiSideNav />
        </Grid>
        <Grid md={9} sm={12} xs={12}>
          <PathHeader
            pathName="Deal of the Day"
            pathHeading="Deal of the Day"
            featureSort={true}
          />
          <Grid container md={12} sm={12} gap={3} className="dealCardWrapper">
            {cart &&
              cart.map((item) => {
                return (
                  <Grid xs={12} sm={5} md={3.8}>
                    <Cards
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      location={item.location}
                      des={item.des}
                      weight={item.weight}
                      kd={item.kd}
                      discount={item.discount}
                      oldValue={item.oldValue}
                      oldRate={item.oldRate}
                      rate={item.rate}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Deal;
