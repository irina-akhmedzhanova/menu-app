import { Recipe } from './menuPageReducer';
import { RecipesActions, RecipesActionTypes } from '../actions/recipes/types';

export type Recipes = Recipe[];

export type RecipesState = {
  data: Recipes,
  loading: boolean,
  error: string | null
}

const initialState: RecipesState = {data: [], loading: false, error: null};

function recipesPageReducer(
  state = initialState,
  action: RecipesActions
) { 
  switch (action.type) {
    case RecipesActionTypes.FETCH_RECIPES_START:
      return {...state, loading: true}
    case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
      return {...state, data: action.payload, loading: false}
    case RecipesActionTypes.FETCH_RECIPES_ERROR:
      return {...state, error: action.payload}

    default: return state
  }
}

export { recipesPageReducer }