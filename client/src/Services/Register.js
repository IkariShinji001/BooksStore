import axios from 'axios';

const fetchRegister = async (e, username, password, confirmPassword, email) => {
    e.preventDefault();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!username || !password || !confirmPassword || !email) {
        alert("Không được để trống thông tin");
        return false;
    }

    if (!email.match(validRegex)) {
        alert("Mail không hợp lệ");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Kiểm tra lại mật khẩu");
        return false;
    } else {
        const res = await axios.post("http://localhost:8080/api/users/register", {
            username: username,
            password: password,
            email: email
        })
        if (res.data.message === "ok") {
            return true;
        } else {
            alert("Tên đăng nhập đã được sử dụng")
            return false;
        }
    }
}

export default fetchRegister;