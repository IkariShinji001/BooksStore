function TestimonialReader({ imgAvatar, userName, star, title, desc }) {
    return (
        <div className="w-full h-auto bg-primary-blue rounded-xl shadow-2xl shadow-[rgba(0,0,0, .5)]">
            <div className="mx-4 my-3">
                <div className="flex h-1/3 ">
                    <img alt="avatar" className="rounded-full h-1/2 w-1/5" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
                    <div className="flex flex-col justify-center items-center w-1/3">
                        <h2 className="text-white font-cardo text-xl">Duy Trần</h2>
                        <div className=" w-2/3 flex justify-between text-secondary-yellow mt-4 items-center">
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle-half-stroke"></i>
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <h2 className="font-bold text-white font-cardo text-xl">“ I love this Store ”</h2>
                </div>

                <div className="py-3">
                    <p className="text-[#B4C7E7]">All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialReader;