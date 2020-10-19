interface Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: Date;
  characters: string[];
  povCharacters: string[];
}

export interface ApiState {
  isLoadingBooks: boolean;
  books: Book[];
}

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

interface fetchBooks {
  type: typeof GET_BOOKS;
}

interface getBooksSuccess {
  type: typeof GET_BOOKS_SUCCESS;
  payload: Book[];
}

interface getBooksError {
  type: typeof GET_BOOKS_ERROR;
}

export type ApiActionTypes = fetchBooks | getBooksSuccess | getBooksError;
