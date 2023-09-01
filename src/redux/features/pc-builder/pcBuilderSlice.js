const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  cpu: "",
  ram: "",
  motherboard: "",
  power_supply: "",
  storage_device: "",
  monitor: "",
  subtotal: {
    total: 0,
    itemsSelected: 0,
  },
};

const pcBuilderSlice = createSlice({
  initialState,
  name: "pc-builder",
  reducers: {
    addToBuildList: (state, action) => {
      if (action.payload.categody == "ram") {
        state.ram = action.payload;
        state.subtotal.itemsSelected = state.subtotal.itemsSelected + 1;
      }
      if (action.payload.categody == "Processor") {
        state.cpu = action.payload;
        state.subtotal.itemsSelected = state.subtotal.itemsSelected + 1;
      }
      if (action.payload.categody == "Motherboard") {
        state.motherboard = action.payload;
        state.subtotal.itemsSelected = state.subtotal.itemsSelected + 1;
      }
      if (action.payload.categody == "power-supply") {
        state.power_supply = action.payload;
        state.subtotal.itemsSelected = state.subtotal.itemsSelected + 1;
      }
      if (action.payload.categody == "storage-device") {
        state.storage_device = action.payload;
        state.subtotal.itemsSelected = state.subtotal.itemsSelected + 1;
      }
      if (action.payload.categody == "monitor") {
        state.monitor = action.payload;
        state.subtotal.itemsSelected = state.subtotal.itemsSelected + 1;
      }
      let price = 0;
      function total() {
        for (const keys in state) {
          const items = state[keys];
          if (items.price) {
            price = price + Number(items.price);
            state.subtotal.total = price;
          }
        }
      }
      total();
    },
    buildSuccess: () => initialState,
  },
});

export default pcBuilderSlice.reducer;
export const { addToBuildList, buildSuccess } = pcBuilderSlice.actions;
