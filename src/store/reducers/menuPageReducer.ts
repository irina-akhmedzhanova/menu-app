import { ActionTypes } from '../actionTypes/actionsTypes';
import { WeekActions } from '../actions/weekActions';

export type Recipe = {
  mealtime: string,
  title: string
};

export type Day = {
  date: null,
  id: number,
  name: string,
  recipes: Recipe[]
};

export type Week = Day[];

export type WeekState = {
  data: Week, 
  loading: boolean, 
  error: string | null};

const initialState: WeekState = {data: [], loading: false, error: null};

function menuPageReducer(
  state = initialState,
  action: WeekActions
) { 
  switch (action.type) {
    case ActionTypes.FETCH_WEEK_START:
      return {...state, loadig: true}
    case ActionTypes.FETCH_WEEK_SUCCESS:
      return {...state, data: action.payload}
    case ActionTypes.FETCH_WEEK_ERROR:
      return {...state, error: action.payload}

    default: return state
  }
}

export { menuPageReducer }