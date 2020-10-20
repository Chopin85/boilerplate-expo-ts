import api from '../api';

const BOOKS_ROUTE = 'https://www.anapioficeandfire.com/api/books';

const bookService = {
  async getBooks() {
    return api.get(`${BOOKS_ROUTE}`);
  }
};

export default bookService;
