import { Recipes } from '../../reducers/recipesPageReducer';

enum RecipesActionTypes {
  FETCH_RECIPES_START = 'FETCH_RECIPES_START',
  FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS',
  FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR'
};

type FetchRecipesStartAction = {
  type: RecipesActionTypes.FETCH_RECIPES_START
};

type FetchRecipesSuccessAction = {
  type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
  payload: Recipes,
};

type FetchRecipesErrorAction = {
  type: RecipesActionTypes.FETCH_RECIPES_ERROR,
  payload: string
};

type RecipesActions = 
  | FetchRecipesStartAction 
  | FetchRecipesSuccessAction 
  | FetchRecipesErrorAction;

export type { RecipesActions };
export { RecipesActionTypes };