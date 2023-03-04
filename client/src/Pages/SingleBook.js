import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchBookDetail from '../Services/GetBookDetail';
function SingleBook() {
    let { slug } = useParams();
    const [book, setBook] = useState();

    console.log(book);
    useEffect(() => {
        const handleGetBookDetail = async () => {
            const res = await fetchBookDetail(slug);
            setBook(res.book);
        }
        handleGetBookDetail();
    }, [])


    return (
        <div>
            {book && <div className='w-screen h-screen bg-[#e9e8e8] pt-5'>
                <div className="mx-auto max-w-screen-xl">
                    <div className=" bg-white w-full h-auto rounded-xl mx-6 flex">
                        <div className='w-5/12 mx-4 my-4'>
                            <img src={book.imgBookCover} className="border-solid border-border-img border-8 mx-auto" alt=''></img>
                        </div>
                        <div className='w-7/12 mx-4 my-4'>
                            <h1 className='font-cardo text-3xl text-primary-blue font-bold'>{book.title}</h1>
                            <div className='mt-4'>
                                <p className=''>Author:<span className='font-bold'> {book.author}</span></p>
                                <p>Bookcover:<span className='font-bold'> {book.bookCover}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>




    )
}

export default SingleBook;