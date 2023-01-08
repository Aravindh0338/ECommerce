import React, { useState, useContext } from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import fresh from "../../assets/images/Fresh&LocalLogo.png";
import DownArrowSmall from "../../assets/images/down-arrow(1).png";
import Location from "../../assets/images/Location.png";
import Arrow from "../../assets/images/arrow.png";
import Account from "../../assets/images/Account.png";
import Notification from "../../assets/images/Notification.png";
import Delete from "../../assets/images/Delete.png";
import SearchIcon from "@mui/icons-material/Search";
import NavSearch from "../NavSearch/Search";
import { ShowProduct } from "../../contexts/EnableProduct/ShowProduct";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

function Nav() {
  const [searchNavType, setShowsearchNavType] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { setData } = useContext(ShowProduct);
  const navigate = useNavigate();
  const items = useSelector((state) => state);

  const style = {
    textDecoration: "none",
  };
  return (
    <nav className="nav">
      <AppBar className="appbar">
        <Grid item md={12}>
          <Toolbar flexDirection={isMobile ? "column" : "row"}>
            <Grid
              container
              item
              md={6}
              spacing={3}
              alignItems="center"
              flexDirection={isMobile ? "column" : "row"}
            >
              <Grid item md={3} sm={5} xs={5}>
                <Link data-testId="logo" style={style} to="/">
                  <img src={fresh} className="freshLogo" alt="Fresh&Local" />
                </Link>
              </Grid>
              {!isMobile && (
                <>
                  <Grid
                    data-testId="shop"
                    className="shop"
                    item
                    md={5}
                    onClick={() => setData(true)}
                  >
                    <Typography className="text" margin="10px">
                      Shop by Category
                    </Typography>
                    <img
                      src={DownArrowSmall}
                      className="downArrowSmall"
                      alt="DownArrow"
                    />
                  </Grid>

                  <Grid item md={4}>
                    <Link data-testId="farm" style={style} to="/farm">
                      <Typography className="text">Explore Farms</Typography>
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
            <Grid
              container
              item
              md={6}
              alignItems="center"
              display="flex"
              flexDirection="row"
              justifyContent={!isMobile ? "space-evenly" : "flex-end"}
            >
              {!isMobile && (
                <>
                  {" "}
                  <Grid
                    item
                    className="searchGrid"
                    onClick={() => {
                      setShowsearchNavType("search");
                    }}
                    onBlur={() => {
                      setShowsearchNavType("");
                    }}
                  >
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                    <Typography data-testId="searchProduct" className="text">
                      Search
                    </Typography>
                    {searchNavType === "search" ? (
                      <NavSearch
                        allOptions={[
                          "Eggs",
                          "Green Apple",
                          "Milk",
                          "Residue Free",
                        ]}
                      />
                    ) : null}
                  </Grid>
                  <Grid
                    item
                    className="shop"
                    onClick={() => {
                      setShowsearchNavType("location");
                    }}
                    onBlur={() => {
                      setShowsearchNavType("");
                    }}
                  >
                    <img src={Location} className="searchIcon" alt="Location" />
                    <Typography
                      data-testId="searchAddress"
                      className="text"
                      marginRight="10px"
                      marginLeft="10px"
                    >
                      Aravindh 627008
                    </Typography>
                    <IconButton>
                      <img src={Arrow} className="arrowLarge" alt="Arrow" />
                    </IconButton>
                    {searchNavType === "location" ? (
                      <NavSearch
                        allOptions={[
                          "Office, Mubarak Al-Kabir",
                          "My Home, Al-farwaniyah",
                          "Mom Home, Al-Shuwaikh",
                        ]}
                        type="location"
                      />
                    ) : null}
                  </Grid>
                </>
              )}
              <Grid md={3} className="iconGrid">
                <IconButton>
                  <img src={Account} className="searchIcon" alt="Account" />
                </IconButton>

                <IconButton>
                  <Badge badgeContent={3} color="error">
                    <img
                      src={Notification}
                      className="searchIcon"
                      alt="Notification"
                    />
                  </Badge>
                </IconButton>

                <IconButton
                  data-testId="cart"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <Badge
                    badgeContent={items ? items.length : ""}
                    color="success"
                  >
                    <img src={Delete} className="searchIcon" alt="Delete" />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </nav>
  );
}

export default Nav;
