import * as bookmodels from '../models/bookmodels.js';
export const fetchAllBook = async() => {
    const books = await bookmodels.fetch();
    return books;
}
const doesbookExist = async(book) => {
    let existing;
    if (Object.hasOwn(book, "id")) {
        existing = await bookmodels.findBookById(book.id);
    } else {
        existing = await bookmodels.findBookByNameAndAuthor(book.name, book.author);
    }

    if (existing.length > 0) {
        return true;
    }

    return false;
}
export const createBook = async(book) => {
    if (!book.name || !book.author) {
        throw new Error('Name and Author is required');
    }

    const existing = await doesbookExist(book);

    if (existing) {
        throw new Error('Book already exist!');
    }
    const bookId = await bookmodels.insert(book);
    return bookId;
}
export const updateBook = async(book) => {
    if (!book.name || !book.author) {
        throw new Error('Name and Author is required');
    }

    const existing = await doesbookExist(book);

    if (!existing) {
        throw new Error('Book does not exist!');
    }

    const updatedBook = await bookmodels.update(book);
    return updatedBook;
}
export const deleteBook = async(id) => {
    const book = { id };

    const existing = await doesbookExist(book);

    if (!existing) {
        throw new Error('Book does not exist!');
    }

    const deletedBook = await bookmodels.remove(id);
    return deletedBook;
}