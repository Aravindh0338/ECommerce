import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Filter from "../../../assets/images/Filter.png";
import "./SideNav.css";
import Checkbox from "@mui/material/Checkbox";
import { FarmFilter } from "../../../contexts/farmfilter/FarmFilter";

function SideNav() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { updateValue, deleteValue, state, setState } = useContext(FarmFilter);
  // const [state, setState] = useState({
  //   Dairy: true,
  //   Poultry: false,
  //   SeaFood: false,
  //   Vegetables: false,
  //   FreshFruits: false,
  //   Flowers: false,
  // });

  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.checked) {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
      updateValue(event.target.name);
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
      deleteValue(event.target.name);
    }
  };

  // let v = props.name;
  // useEffect(() => {
  //   if (props.name) {
  //     setState({
  //       ...state,
  //       [props.name]: state[v] ? false : true,
  //     });
  //     v = "";
  //   }
  // }, [props]);
  // console.log(state);

  return (
    <Grid className="sideNavWrapper">
      <Grid container className="labelFilter">
        <Typography variant="p" className="FilterLabel">
          Category
        </Typography>
        <img src={Filter} alt="Filter" />
      </Grid>
      <Grid container className="labelCheckbox">
        <Typography
          data-testId="checkboxLabel"
          variant="p"
          className="labelText"
        >
          Dairy
        </Typography>
        <Checkbox
          data-testId="confirm_checkbox"
          {...label}
          checked={state.Dairy}
          color="success"
          name="Dairy"
          onChange={handleChange}
        />
      </Grid>
      <Grid container className="labelCheckbox">
        <Typography
          data-testId="checkboxLabel"
          variant="p"
          className="labelText"
        >
          Poultry
        </Typography>
        <Checkbox
          data-testId="confirm_checkbox"
          {...label}
          checked={state.Poultry}
          color="success"
          name="Poultry"
          onChange={handleChange}
        />
      </Grid>
      <Grid container className="labelCheckbox">
        <Typography
          data-testId="checkboxLabel"
          variant="p"
          className="labelText"
        >
          Sea Food
        </Typography>
        <Checkbox
          data-testId="confirm_checkbox"
          {...label}
          checked={state.SeaFood}
          color="success"
          name="SeaFood"
          onChange={handleChange}
        />
      </Grid>
      <Grid container className="labelCheckbox">
        <Typography
          data-testId="checkboxLabel"
          variant="p"
          className="labelText"
        >
          Vegetables
        </Typography>
        <Checkbox
          data-testId="confirm_checkbox"
          {...label}
          checked={state.Vegetables}
          color="success"
          name="Vegetables"
          onChange={handleChange}
        />
      </Grid>
      <Grid container className="labelCheckbox">
        <Typography
          data-testId="checkboxLabel"
          variant="p"
          className="labelText"
        >
          Fresh Fruits
        </Typography>
        <Checkbox
          data-testId="confirm_checkbox"
          {...label}
          checked={state.FreshFruits}
          color="success"
          name="FreshFruits"
          onChange={handleChange}
        />
      </Grid>
      <Grid container className="labelCheckbox">
        <Typography
          data-testId="checkboxLabel"
          variant="p"
          className="labelText"
        >
          Flowers
        </Typography>
        <Checkbox
          data-testId="confirm_checkbox"
          {...label}
          checked={state.Flowers}
          color="success"
          name="Flowers"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}

export default SideNav;
