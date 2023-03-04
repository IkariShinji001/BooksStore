import jwt_decode from 'jwt-decode';

const IsAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decoded = jwt_decode(token);
            return decoded.exp > Date.now() / 1000; // kiểm tra thời gian hết hạn của token
        } catch (error) {
            localStorage.removeItem("token");
            return false;

        }
    }
    return false;
};

export default IsAuthenticated;