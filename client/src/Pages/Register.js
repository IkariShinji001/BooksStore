import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import fetchRegister from "../Services/Register";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        const user = await fetchRegister(e, username, password, confirmPassword, email);
        if (user) {
            alert("Đăng ký thành công")
        }
    }

    return (
        <div>
            <div>
                <div className="mx-auto max-w-screen-xl">
                    <h1 className="text-center mt-20 text-5xl font-cardo">Register</h1>
                    <div className="flex h-screen justify-center mt-20">
                        <div className="w-10/12 h-[600px] flex">
                            <div className="w-5/12">
                                <img src="https://bn.bkocdn.info/covers/89ee82244015d4e6/v/600.jpeg" alt="" width={"100%"} className=" object-fill h-full " />
                            </div>

                            <div className="w-7/12 border border-primary-blue relative">
                                <h2 className="text-center font-cardo text-3xl mt-8 font-bold">Welcome New Mate!</h2>
                                <span className="h-1 w-20 absolute bg-secondary-yellow top-16  left-1/2 mt-6 -translate-x-1/2"></span>
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
                                        <label className="font-cardo font-bold text-xl">Email</label>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="py-2 pl-2 bg-[#F3F3F3] w-2/3"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
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
                                    <div className="flex flex-start w-2/3 mt-4">
                                        <label className="font-cardo font-bold text-xl">Confirm password</label>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Confirm your password"
                                        className="py-2 pl-2 bg-[#F3F3F3] w-2/3 font-cardo"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                    />
                                    <button onClick={handleRegister} className="bg-transparent border-solid border-secondary-yellow border-2 mt-6 w-8/12 h-12 font-bold font-cardo text-lg
             hover:shadow-[inset_26rem_0_0_0] hover:shadow-secondary-yellow duration-[400ms,700ms] transition-[color,box-shadow]">Register </button>
                                    <h2 className="mt-2">Have a account?</h2>
                                    <Link to="/login" className=" text-red-600 ">Login now</Link>
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