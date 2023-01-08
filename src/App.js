import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import Home from "./components/HomePage/Home";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
// import ShopCategories from "./components/ShopByCategory/ShopCategories";
// import FarmList from "./components/farmlist/FarmList";
import { ShowContextProvider } from "./contexts/EnableProduct/ShowProduct";
import { FarmFilterProvider } from "./contexts/farmfilter/FarmFilter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LazyLoading } from "./components/CustomComponent/lazyLoading/LazyLoading";

// import Categories from "./components/categories/Categories";
// import Deal from "./components/deal-of-the-day/Deal";
// import FeaturePromos from "./components/feature-promos/FeaturePromos";
// import MyCart from "./components/cart/MyCart";
// const MyCart = React.lazy(() => import("./components/cart/MyCart.js"));

const MyCart = LazyLoading(() => import("./components/cart/MyCart"), "MyCart");
const FeaturePromos = LazyLoading(() =>
  import("./components/feature-promos/FeaturePromos.js")
);
const Deal = LazyLoading(() => import("./components/deal-of-the-day/Deal.js"));
const ShopCategories = LazyLoading(() =>
  import("./components/ShopByCategory/ShopCategories.js")
);
const Categories = LazyLoading(() =>
  import("./components/categories/Categories.js")
);
const FarmList = LazyLoading(() => import("./components/farmlist/FarmList.js"));

function App() {
  const loadGeneralUserComponent = (component) => {
    return (
      <React.Suspense fallback={<CircularProgress />}>
        {component}
      </React.Suspense>
    );
  };

  return (
    <Router>
      <ShowContextProvider>
        <ShopCategories />
        <Nav />
      </ShowContextProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/farm"
          exact
          element={
            <FarmFilterProvider>
              {loadGeneralUserComponent(<FarmList />)}
            </FarmFilterProvider>
          }
        />
        <Route
          path="/categories"
          element={loadGeneralUserComponent(<Categories />)}
        />
        <Route
          path="/deal-of-the-day"
          element={loadGeneralUserComponent(<Deal />)}
        />
        <Route
          path="/feature-promos"
          element={loadGeneralUserComponent(<FeaturePromos />)}
        />
        <Route path="/cart" element={loadGeneralUserComponent(<MyCart />)} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
