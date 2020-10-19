import {
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ApiActionTypes
} from './types';

import bookService from '../../services/books';

import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store';

export const fetchBooks = () => {
  return async (dispatch: ThunkDispatch<RootState, void, ApiActionTypes>) => {
    dispatch({ type: GET_BOOKS });
    try {
      const books = await bookService.getBooks();
      dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
    } catch (error) {
      dispatch({ type: GET_BOOKS_ERROR, payload: error });
    }
  };
};
