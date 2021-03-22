import { WeekActionTypes, WeekActions } from '../actions/weeks/types';

export type Recipe = {
  mealtime: string,
  title: string,
  description: string,
  photo: {
    url: string | undefined
  }
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
    case WeekActionTypes.FETCH_WEEK_START:
      return {...state, loading: true}
    case WeekActionTypes.FETCH_WEEK_SUCCESS:
      return {...state, data: action.payload, loading: false}
    case WeekActionTypes.FETCH_WEEK_ERROR:
      return {...state, error: action.payload}

    default: return state
  }
}

export { menuPageReducer }