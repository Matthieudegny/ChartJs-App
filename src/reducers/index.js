import { combineReducers } from 'redux';

import produitsReducer from '../reducers/produitsReducer';

const rootReducer = combineReducers({
  produitsReducer: produitsReducer,
});

export default rootReducer;