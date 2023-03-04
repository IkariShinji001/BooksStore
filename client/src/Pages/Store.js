import Catalog from "../Components/Catalog";
import Book from "../Components/Book"
import { useState } from "react";

function Store() {
    const [Books, setBooks] = useState([]);

    const handleData = (books) => {
        setBooks(books.books);
    }

    return (
        <div className="w-screen bg-[#e9e8e8] h-auto pt-20">
            <div data-aos="fade-up" className="h-full mx-auto max-w-screen-xl">
                <div className="flex">
                    <div className="w-[23%]">
                        <Catalog onData={handleData} />
                    </div>
                    <div className="ml-4 w-[77%] flex flex-wrap gap-2">
                        {
                            Books.map((book) => (
                                <Book
                                    key={book._id}
                                    id={book._id}
                                    imgCover={book.imgBookCover}
                                    name={book.title}
                                    price={book.price}
                                    isNewBook={book.isNewBook}
                                    discount={book.discount}
                                    star={book.starRating}
                                    sizeStar={book.sizeRating}
                                    volume={book.volume}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Store;