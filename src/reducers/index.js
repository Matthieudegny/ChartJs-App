import { combineReducers } from 'redux';

import productsReducer from '../reducers/productsReducer';
import customersReducer from '../reducers/customersReducer';
import recordsReducer from '../reducers/recordsReducer';

const rootReducer = combineReducers({
  customersReducer,
  productsReducer,
  recordsReducer
});

export default rootReducer;