import axios from 'axios';

const fetchAllBook = async (token) => {
    const res = await axios.get("http://localhost:8080/api/books", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data;

}

export default fetchAllBook;