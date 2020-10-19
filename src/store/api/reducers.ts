import {
  ApiState,
  ApiActionTypes,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR
} from './types';

const initialState: ApiState = {
  isLoadingBooks: false,
  books: []
};

export const apiReducer = (
  state = initialState,
  action: ApiActionTypes
): ApiState => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, isLoadingBooks: true, books: initialState.books };
    case GET_BOOKS_SUCCESS:
      return { ...state, isLoadingBooks: false, books: action.payload };
    case GET_BOOKS_ERROR:
      return { ...state, isLoadingBooks: false };
    default:
      return state;
  }
};
