import { ActionTypes } from '../actionTypes/actionsTypes';
import { Week } from '../reducers/menuPageReducer';

type FetchWeekStartAction = {
  type: ActionTypes.FETCH_WEEK_START
};

type FetchWeekSuccessAction = {
  type: ActionTypes.FETCH_WEEK_SUCCESS,
  payload: Week,
};

type FetchWeekErrorAction = {
  type: ActionTypes.FETCH_WEEK_ERROR,
  payload: string
};

export type WeekActions = 
  | FetchWeekStartAction 
  | FetchWeekSuccessAction 
  | FetchWeekErrorAction;
