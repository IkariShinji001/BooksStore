import { Link } from "react-router-dom";
import { useState } from "react";

function Form(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUserData = () => {
        props.onHandleData({
            username: username,
            password: password
        })
    }
    return (
        <div className="flex h-screen justify-center mt-20">
            <div className="w-8/12 h-2/3 flex">
                <div className="w-5/12">
                    <img src="https://bn.bkocdn.info/covers/89ee82244015d4e6/v/600.jpeg" alt="" width={"100%"} className=" object-fill h-full " />
                </div>

                <div className="w-7/12 border border-primary-blue relative">
                    <h2 className="text-center font-cardo text-3xl mt-16">Hello Again!</h2>
                    <span className="h-1 w-20 absolute bg-secondary-yellow top-16  left-1/2 mt-12 -translate-x-1/2"></span>
                    <div className="flex flex-col w-full items-center mt-12">
                        <input
                            type="text"
                            placeholder="Username"
                            className="py-2 pl-2 bg-[#F3F3F3] w-2/3"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="py-2 pl-2 bg-[#F3F3F3] w-2/3 mt-4"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        {
                            props.type === "register" && <input type="password" placeholder="rePassword" className="py-2 pl-2 bg-[#F3F3F3] w-2/3 mt-4" />
                        }
                        <button onClick={handleUserData} className="bg-transparent border-solid border-secondary-yellow border-2 mt-6 w-8/12 h-12 font-bold font-cardo text-lg
                hover:shadow-[inset_21rem_0_0_0] hover:shadow-secondary-yellow duration-[400ms,700ms] transition-[color,box-shadow]">Login </button>
                        <h2 className="mt-8">Don't have account</h2>
                        <Link to="/register" className=" text-red-600 ">Register now</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Form;