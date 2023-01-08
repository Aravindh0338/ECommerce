export const addItem = (payload) => {
  return {
    type: "ADDITEM",
    payload: payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: "DELETEITEM",
    payload: payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: "REMOVEITEM",
    payload: payload,
  };
};
