import axios from 'axios';

const fetchBookFilter = async (Genres, Price) => {
    const res = await axios.get("http://localhost:8080/api/booksFilter", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        params: {
            genres: Genres,
            price: Price
        }
    })
    return res.data;

}

export default fetchBookFilter;