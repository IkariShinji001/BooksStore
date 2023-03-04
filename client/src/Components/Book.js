import { Link } from "react-router-dom";
import Star from "./Star";
function Book({ imgCover, name, price, isNewBook, discount, id, star, sizeStar, volume }) {
    const discountPrice = price - ((price * discount) / 100);
    return (
        <Link to={`/store/${id}`} className="w-[24%] box-border h-fit bg-transparent border-2  hover:border-2 hover:border-[#838383] bg-white">
            <div className="mx-3 my-3 relative">
                {isNewBook && <span className="absolute w-fit h-fit right-0 bg-red-600 px-1 py-1 rounded-bl-lg text-white font-cardo">New</span>}
                {discount && <span className="w-fit h-fit py-2 px-2 bg-secondary-yellow absolute rounded-br-lg  left-0">{discount}%</span>}
                <img alt="" src={imgCover} />
                <p className=" line-clamp-2 text-[15px] font-[500] mt-3 hover:text-emerald-700 transition h-11" title={name}>{name}</p>
                <span className="absolute right-3 font-medium bottom-[12%]">Vol</span>
                <span className="absolute w-[50px] h-[50px] bottom-0 right-0 bg-transparent px-1 py-1 rounded-full flex items-center justify-center  text-black border-4 border-primary-blue font-cardo font-cardo font-bold text-2xl">{volume}</span>
                <Star star={star} size={sizeStar} />
                <div>
                    <p className="mt-2 text-lg font-bold text-[#C92127]">{new Intl.NumberFormat().format(discountPrice)}đ</p>
                </div>
                <div>
                    <p className="text-md line-through text-[#999999]">{new Intl.NumberFormat().format(price)}đ</p>
                </div>
                <div className="pb-4"></div>
            </div>
        </Link>

    )
}


export default Book;