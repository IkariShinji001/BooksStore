import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/authContext";
import { useContext } from "react";
function Header() {
    const { isAuth, checkAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    let menu = [{ "title": "Home", "path": "/" }, { "title": "Store", "path": "/store" }, { "title": "About" }, { "title": "Contact" }];
    const handleLogout = (e) => {
        if (e.target.innerHTML === "Logout") {
            localStorage.removeItem("token");
            checkAuthenticated();
            navigate("/login");
        }
    }
    return (
        <div className="w-screen bg-[#1b3764] h-auto">
            <header className="py-10 mx-auto max-w-screen-xl">
                <div className="flex justify-between">
                    <div className="flex">
                        <i className="fa-solid fa-book text-3xl text-[#ffca42] "></i>
                        <h1 className="text-2xl pl-4 font-bold text-white font-sans">Duy Store</h1>
                        <i className="ml-4 fa-facebook-f fa-brands text-[#1b3764] px-4 py-2 bg-white text-base cursor-pointer flex items-center"></i>
                        <i className="ml-1 fa-brands fa-instagram text-[#1b3764] px-4 py-2 bg-white text-base cursor-pointer flex items-center"></i>
                        <i className=" ml-1 fa-brands fa-twitter  text-[#1b3764] px-4 flex items-center bg-white text-base cursor-pointer"></i>
                    </div>

                    <ul className="flex w-1/2 justify-between">
                        {
                            menu.map((e, i) =>
                                <Link key={i} to={e.path} className="text-lg text-white px-3 py-1 w-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black">
                                    <li>{e.title}</li>
                                </Link>

                            )
                        }
                        <Link to="/login" className="text-lg text-white px-3 py-1 w-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black "><li onClick={(e) => handleLogout(e)}>
                            {isAuth ? "Logout" : "Login"}</li></Link>
                        <li className="text-lg text-white px-3 py-1 w-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black > "><i className="fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </div>
            </header >
        </div >

    )
}

export default Header;