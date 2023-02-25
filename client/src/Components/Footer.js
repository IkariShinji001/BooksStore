function Footer() {
    return (
        <div className="bg-primary-blue pt-24">
            <div className="h-auto mx-auto max-w-screen-xl flex">
                <div className="flex w-4/12">
                    <div className="flex-col">
                        <div className="flex">
                            <i className="fa-solid fa-book text-3xl text-[#ffca42] "></i>
                            <h1 className="text-2xl pl-4 font-bold text-white font-sans">Books Store</h1>
                        </div>

                        <div className="flex justify-start mt-2">
                            <i className="fa-facebook-f fa-brands text-white px-4 py-2 bg-transparent text-base cursor-pointer flex items-center border border-secondary-yellow"></i>
                            <i className="ml-2 fa-brands fa-instagram text-white px-4 py-2 bg-transparent text-base cursor-pointer flex items-center border border-secondary-yellow"></i>
                            <i className=" ml-2 fa-brands fa-twitter text-white px-4 flex items-center bg-transparent text-base cursor-pointer border border-secondary-yellow"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;