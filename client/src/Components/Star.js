
function Star({ star, size }) {

    return (
        <div className=" w-2/3 flex text-[#ccc] mt-3 items-center relative">
            {[...Array(5)].map(start => {
                return <i class="fa-solid fa-star"></i>;
            })}
            <p className=" text-black text-sm">({size})</p>
            <div className="w-full items-center flex absolute text-secondary-yellow">
                {[...Array(star)].map((star, i) => {
                    return <i key={i} className="fa-solid fa-star" ></i>;
                })}
            </div>
        </div >
    )
}

export default Star;