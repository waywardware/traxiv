import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiMiddleware } from 'redux-api-middleware';
import drawerReducer from '../features/drawer/drawerSlice';
import mountsReducer from '../features/mounts/mountsSlice';
import searchReducer from '../features/search/searchSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    mounts: mountsReducer,
    drawer: drawerReducer,
  },
  middleware: [...getDefaultMiddleware(), apiMiddleware]
});
