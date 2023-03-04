import axios from 'axios';

const fetchLogin = async (e, username, password) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/api/users/login", {
        username: username,
        password: password
    })
    if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Đăng nhập thành công");
        return res.data.token;
    } else {
        alert("Vui lòng kiểm tra lại tài khoản hoặc mật khẩu")
        return false;
    }

}

export default fetchLogin;