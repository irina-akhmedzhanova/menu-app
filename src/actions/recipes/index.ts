import { Dispatch } from 'redux';
import { RecipesActions, RecipesActionTypes } from './types';

const fetchRecipes = () => {
  return async (dispatch: Dispatch<RecipesActions>) => {
    dispatch({
      type: RecipesActionTypes.FETCH_RECIPES_START
    });
    try {
      const week = await fetch(process.env.REACT_APP_URL + `recipes`)
        .then(response => response.json())
        .then(json => json);
      dispatch({
        type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
        payload: week
      })
    } catch (err) {
      dispatch({
        type: RecipesActionTypes.FETCH_RECIPES_ERROR,
        payload: err.message
      })
    }
  }
};

export { fetchRecipes };