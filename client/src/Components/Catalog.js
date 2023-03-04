import { useContext, useEffect, useState } from "react"
import { PriceRangeContext } from "../Context/priceRangeContenxt";
import fetchBookFilter from "../Services/GetBookFilter";



function Catalog(props) {
    const genresList = ["Comedy", "Romance", "School Life", "Slice of Life", "Action", "Harem", "Adventure", "Fantasy", "Mecha", "Ecchi", "Adult", "Shounen", "Isekai"];
    const [Genres, setGenres] = useState([]);
    const { priceRange, setPriceRange } = useContext(PriceRangeContext);

    const getBookFilter = async () => {
        const books = await fetchBookFilter(Genres, priceRange);
        props.onData(books);
    }

    useEffect(() => {
        getBookFilter();
    }, [Genres, priceRange])


    const handleChange = event => {
        if (event.target.checked) {
            setGenres([
                ...Genres,
                event.target.id
            ]);
        } else {
            setGenres((prev) => prev.filter(item => item !== event.target.id));
        }
    };

    return (
        <div className="bg-white border border-[#ccc] py-4">
            <div className="px-2">
                <h1 className="font-bold">PRICE</h1>
                <div className="px-3">
                    <p>Use slider to limit price</p>
                    <div>
                        <input className="w-full cursor-pointer"
                            step="20000" type="range" min="0" max="1000000" value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            list="markers" />
                        <datalist id="markers">
                            <option value="100000"></option>
                            <option value="200000"></option>
                            <option value="300000"></option>
                            <option value="400000"></option>
                            <option value="500000"></option>
                            <option value="600000"></option>
                            <option value="700000"></option>
                            <option value="800000"></option>
                            <option value="900000"></option>
                            <option value="1000000"></option>
                        </datalist>
                        <span>{priceRange != 0 ? "0 đ -" : ""}  {new Intl.NumberFormat().format(priceRange)} đ</span>
                    </div>
                </div>

                <div className="mt-2">
                    <h1 className="font-bold">
                        GENRES
                    </h1>
                    <div className="px-3">
                        {genresList.map((genres) => {
                            return (
                                <div className="flex items-center my-2">
                                    <input onChange={(e) => handleChange(e)} type="checkbox" id={genres} className="cursor-pointer h-4 w-4" value={genres} />
                                    <label htmlFor={genres} className="cursor-pointer ml-2 ">{genres}</label>
                                </div>

                            )
                        })}
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Catalog;