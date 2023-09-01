import pcBuilderSlice from "./features/pc-builder/pcBuilderSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderSlice,
  },
});

export default store;
