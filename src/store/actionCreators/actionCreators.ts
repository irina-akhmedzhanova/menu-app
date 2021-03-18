import { Dispatch } from 'redux';
import { ActionTypes } from '../actionTypes/actionsTypes';
import { WeekActions } from '../actions/weekActions';

const SERVER: string = 'http://192.168.1.199:1337/weeks';

export const fetchWeek = () => {
  const lastId = '/2'
  return async (dispatch: Dispatch<WeekActions>) => {
    dispatch({
      type: ActionTypes.FETCH_WEEK_START
    });
    try {
      const week = await fetch(SERVER + lastId)
        .then(response => response.json())
        .then(json => json.days);
      dispatch({
        type: ActionTypes.FETCH_WEEK_SUCCESS,
        payload: week
      })
    } catch (err) {
      dispatch({
        type: ActionTypes.FETCH_WEEK_ERROR,
        payload: err.message
      })
    }
  }
};