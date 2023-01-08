import React, { createContext, useState } from "react";

export const FarmFilter = createContext();

export function FarmFilterProvider(props) {
  const [state, setState] = useState({
    Dairy: true,
    Poultry: false,
    SeaFood: false,
    Vegetables: false,
    FreshFruits: false,
    Flowers: false,
  });
  const [data, setData] = useState(["Dairy"]);
  const updateValue = (val) => {
    setData([...data, val]);
  };
  const deleteValue = (val) => {
    let arr = data;
    arr = arr.filter((d) => {
      if (d !== val) {
        return d;
      }
    });
    setData(arr);
  };

  const onClose = (name) => {
    setState({
      ...state,
      [name]: false,
    });
    deleteValue(name);
  };

  return (
    <FarmFilter.Provider
      value={{ data, updateValue, deleteValue, state, setState, onClose }}
    >
      {props.children}
    </FarmFilter.Provider>
  );
}
