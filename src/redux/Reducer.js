const initial = [];
const quantity = 1;

const reducer = (state = initial, action) => {
  let { payload, type } = action;
  let flag = true;

  switch (type) {
    case "ADDITEM": {
      if (state.length === 0) {
        payload = { ...payload, quantity };
        state.push(payload);
        console.log("hai");
      } else {
        state = state.filter((item) => {
          if (item.name === payload.name) {
            flag = false;
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        });
        if (flag) {
          payload = { ...payload, quantity };
          state.push(payload);
        }
      }

      return state;
    }

    // case "DELETEITEM": {
    //   state = state.filter((item) => {
    //     if (item.name === payload.name) {
    //       item.quantity = item.quantity - 1;
    //       if (item.quantity > 0) {
    //         return item;
    //       }
    //     } else {
    //       return item;
    //     }
    //   });
    //   return state;
    // }

    case "DELETEITEM": {
      state = state.reduce((quantityFilter, item) => {
        if (item.name === payload.name) {
          item.quantity = item.quantity - 1;
          if (item.quantity > 0) {
            quantityFilter.push(item);
          }
        } else {
          quantityFilter.push(item);
        }
        return quantityFilter;
      }, []);
      return state;
    }

    case "REMOVEITEM": {
      state = state.filter((item) => {
        if (item.name !== payload.name) return item;
      });
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
