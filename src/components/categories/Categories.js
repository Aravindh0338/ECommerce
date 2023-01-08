import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PathHeader from "../CustomComponent/path-header/PathHeader";
import CategoriesCard from "../CustomComponent/Categories/CategoriesCard";
import fetch from "../controllers/fetch";
import "./Categories.css";

function Categories() {
  const [categoriesData, setCategoriesData] = useState();

  const apiCall = async () => {
    let response = await fetch(process.env.REACT_APP_Categories);
    setCategoriesData(response);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <Grid>
      <Grid md={11} className="categoryWrapper">
        <PathHeader pathName="Categories" pathHeading="Categories" />
      </Grid>
      <Grid
        md={11}
        sm={11}
        xs={11}
        rowGap={4}
        columnGap={2}
        container
        className="categoriesData"
      >
        {categoriesData &&
          categoriesData.map((food) => {
            return (
              <CategoriesCard
                key={food.id}
                name={food.name}
                image={food.image}
              />
            );
          })}
      </Grid>
    </Grid>
  );
}

export default Categories;
