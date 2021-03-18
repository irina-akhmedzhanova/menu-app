import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../store/index';

export const useActions = () => {
  const dispatch = useDispatch();
  bindActionCreators(ActionCreators, dispatch);
};