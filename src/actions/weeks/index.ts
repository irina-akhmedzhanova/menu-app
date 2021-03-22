import { Dispatch } from 'redux';
import { format, startOfWeek } from 'date-fns';
import { WeekActions, WeekActionTypes } from './types';

const fetchWeek = () => {
  const dateStartCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const formatDateStart = format(dateStartCurrentWeek, 'yyyy-MM-dd');

  return async (dispatch: Dispatch<WeekActions>) => {
    dispatch({
      type: WeekActionTypes.FETCH_WEEK_START
    });
    try {
      const week = await fetch(process.env.REACT_APP_URL + `weeks?dateStart=${formatDateStart}`)
        .then(response => response.json())
        .then(json => json[0].days);
      dispatch({
        type: WeekActionTypes.FETCH_WEEK_SUCCESS,
        payload: week
      })
    } catch (err) {
      dispatch({
        type: WeekActionTypes.FETCH_WEEK_ERROR,
        payload: err.message
      })
    }
  }
};

export { fetchWeek };