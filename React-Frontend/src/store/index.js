import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusReducer from "./FetchStatusSlice";
import bagSlice from "./BagSlice";



const myntraStore=configureStore(
  {reducer: {
  items:itemsSlice.reducer,
  fetchStatus:fetchStatusReducer,
  bag:bagSlice.reducer,
}})


export default myntraStore;
