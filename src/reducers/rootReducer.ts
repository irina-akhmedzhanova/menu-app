import { combineReducers } from 'redux';
import { menuPageReducer } from './menuPageReducer';
import { recipesPageReducer } from './recipesPageReducer';

const rootReducer = combineReducers({
  menuPage: menuPageReducer,
  recipesPage: recipesPageReducer
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;