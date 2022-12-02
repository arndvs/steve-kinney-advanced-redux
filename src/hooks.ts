import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { ApplicationDispatch, ApplicationState } from './store';


export const useAppDispatch: () => ApplicationDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
