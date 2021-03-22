import { Week } from '../../reducers/menuPageReducer';

enum WeekActionTypes {
  FETCH_WEEK_START = 'FETCH_WEEK_START',
  FETCH_WEEK_SUCCESS = 'FETCH_WEEK_SUCCESS',
  FETCH_WEEK_ERROR = 'FETCH_WEEK_ERROR',
}

type FetchWeekStartAction = {
  type: WeekActionTypes.FETCH_WEEK_START
};

type FetchWeekSuccessAction = {
  type: WeekActionTypes.FETCH_WEEK_SUCCESS,
  payload: Week,
};

type FetchWeekErrorAction = {
  type: WeekActionTypes.FETCH_WEEK_ERROR,
  payload: string
};

type WeekActions =
  | FetchWeekStartAction
  | FetchWeekSuccessAction
  | FetchWeekErrorAction;

export type { WeekActions };
export { WeekActionTypes };
