import React from "react";
import { Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Filter from "../../../assets/images/Filter.png";
import Menu from "../../../assets/images/Menu.png";
import "../sidenav/SideNav.css";
import "./MultiSideNav.css";

function MultiSideNav() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Grid md={12} className="multisideNavWrapper">
      <Grid className="sideNavWrapper">
        <Grid container className="labelFilter">
          <Typography
            data-testId="filterOne"
            variant="p"
            className="FilterLabel"
          >
            Category
          </Typography>
          <img src={Menu} alt="Filter" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Dairy
          </Typography>
          <Checkbox
            {...label}
            data-testId="filterBox"
            color="success"
            name="Dairy"
          />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Poultry
          </Typography>
          <Checkbox {...label} color="success" name="Poultry" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Sea Food
          </Typography>
          <Checkbox {...label} color="success" name="SeaFood" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Vegetables
          </Typography>
          <Checkbox {...label} color="success" name="Vegetables" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Fresh Fruits
          </Typography>
          <Checkbox {...label} color="success" name="FreshFruits" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Flowers
          </Typography>
          <Checkbox {...label} color="success" name="Flowers" />
        </Grid>
      </Grid>
      <Grid className="sideNavWrapper">
        <Grid container className="labelFilter">
          <Typography
            data-testId="filterTwo"
            variant="p"
            className="FilterLabel"
          >
            Sub-Category
          </Typography>
          <img src={Filter} alt="Filter" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Milk
          </Typography>
          <Checkbox {...label} color="success" name="Dairy" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Butter
          </Typography>
          <Checkbox {...label} color="success" name="Poultry" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Cheese
          </Typography>
          <Checkbox {...label} color="success" name="SeaFood" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Eggs
          </Typography>
          <Checkbox {...label} color="success" name="Vegetables" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Chicken
          </Typography>
          <Checkbox {...label} color="success" name="FreshFruits" />
        </Grid>
        <Grid container className="labelCheckbox">
          <Typography variant="p" className="labelText">
            Turkey
          </Typography>
          <Checkbox {...label} color="success" name="Flowers" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MultiSideNav;
