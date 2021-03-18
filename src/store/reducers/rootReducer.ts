import { combineReducers } from 'redux';
import { menuPageReducer } from './menuPageReducer';

const rootReducer = combineReducers({
  menuPage: menuPageReducer
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;