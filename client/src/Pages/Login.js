import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import fetchLogin from "../Services/Login";

import { useContext } from "react";
import { AuthContext } from "../Auth/authContext";
function Login() {
    const { checkAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        const result = await fetchLogin(e, username, password);
        if (result) {
            checkAuthenticated();
            navigate("/");
        }
    }

    return (
        <div>
            <div>
                <div className="mx-auto max-w-screen-xl">
                    <h1 className="text-center mt-20 text-5xl font-cardo">Login</h1>
                    <div className="flex h-screen justify-center mt-20">
                        <div className="w-8/12 h-2/3 flex">
                            <div className="w-5/12">
                                <img src="https://bn.bkocdn.info/covers/89ee82244015d4e6/v/600.jpeg" alt="" width={"100%"} className=" object-fill h-full " />
                            </div>

                            <div className="w-7/12 border border-primary-blue relative">
                                <h2 className="text-center font-cardo text-3xl mt-16">Hello Again!</h2>
                                <span className="h-1 w-20 absolute bg-secondary-yellow top-16  left-1/2 mt-12 -translate-x-1/2"></span>
                                <div className="flex flex-col w-full items-center mt-12">
                                    <div className="flex flex-start w-2/3">
                                        <label className="font-cardo font-bold text-xl">Username</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="py-2 pl-2 bg-[#F3F3F3] w-2/3"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />
                                    <div className="flex flex-start w-2/3 mt-4">
                                        <label className="font-cardo font-bold text-xl">Password</label>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="py-2 pl-2 bg-[#F3F3F3] w-2/3 font-cardo"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <button onClick={handleLogin} className="bg-transparent border-solid border-secondary-yellow border-2 mt-6 w-8/12 h-12 font-bold font-cardo text-lg
             hover:shadow-[inset_21rem_0_0_0] hover:shadow-secondary-yellow duration-[400ms,700ms] transition-[color,box-shadow]">Login </button>
                                    <h2 className="mt-8">Don't have account</h2>
                                    <Link to="/register" className=" text-red-600 ">Register now</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default Login;