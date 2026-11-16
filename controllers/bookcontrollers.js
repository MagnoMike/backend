import * as bookservices from '../services/bookservice.js';

export const fetchAllBooks = async(req, res) => {
    const book = await bookservices.fetchAllBooks();
    res.status(200).json(book);
}
export const createBooks = async(req, res) => {
    console.log(req);
    const { name, author } = req.body;
    const book = { name, author };

    try {
        const bookId = await bookservices.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: `${e.message || "Internal Server Error"}`
        });
    }
}
export const editBooks = async(req, res) => {
    const { name, author } = req.body;
    const { id } = req.params;
    const book = { id: parseInt(id), name, author };

    try {
        const updatedBook = await bookservices.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: `${e.message || "Internal Server Error"}`
        });
    }
}

export const deleteBooks = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await bookservices.deleteBook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: `${e.message || "Internal Server Error"}`
        });
    }
}