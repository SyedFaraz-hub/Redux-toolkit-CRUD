import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "The Pakistan Story",
      author: "Ali Hassan",
      description: "This is a book about Pakistan, its history and culture",
    },
    {
      id: uuidv4(),
      title: "A Place Called Home",
      author: "Shayan Ahmed",
      description: "This is a book about Home, and how we can make it better",
    },
    {
      id: uuidv4(),
      title: "Nature and Nurture",
      author: "Smriti Irani",
      description:
        "This is a book about Nature and Nurture, and how they are related",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, description } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);

      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
        isBookExist[0].description = description;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, updateBook, deleteBook } =
  booksSlice.actions;
export default booksSlice.reducer;
