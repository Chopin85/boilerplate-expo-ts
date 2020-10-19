import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './counter/reducers';
import { drawerReducer } from './drawer/reducers';
import { apiReducer } from './api/reducers';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  drawer: drawerReducer,
  api: apiReducer
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
