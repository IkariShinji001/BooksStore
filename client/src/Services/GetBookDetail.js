import axios from 'axios';

const fetchBookDetail = async (id) => {
    const res = await axios.get("http://localhost:8080/api/books/" + id, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data;

}

export default fetchBookDetail;