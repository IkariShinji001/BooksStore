import Button from "./Button";

function ReviewBook({ imgCover, title, description, pages, length }) {
    return (
        <div className="flex w-6/12 justify-between mt-12">
            <img src={imgCover} className=" w-5/12 shadow-light shadow-lg border-solid border-border-img border-8" alt='s'></img>
            <div className="w-6/12 mt-4">
                <h2 className="font-cardo text-2xl font-bold mt-8">{title}</h2>
                <p className="mt-4 text-[#969AA0]">{description}</p>
                <table className="w-full mt-3">
                    <tr className="flex justify-between text-xl text-primary-blue font-bold font-cardo">
                        <td className="w-full"><i className="fa-solid fa-circle text-xs text-secondary-yellow"></i> Pages:</td>
                        <td className="w-full"><i className="fa-solid fa-circle text-xs text-secondary-yellow"></i> Length:</td>
                    </tr>
                    <tr className="flex justify-around text-lg text-[#969AA0] font-cardo">
                        <td className="w-full ml-4">{pages}pages</td>
                        <td className="w-full">{length}hours</td>
                    </tr>
                </table>

                <Button background={"transparent"} title={"Order Today"} className=" border-solid border-secondary-yellow border-2 w-8/12 h-14 mt-12 text-red font-bold font-cardo text-lg hover:bg-black
                hover:shadow-[inset_14rem_0_0_0] hover:shadow-secondary-yellow duration-[400ms,700ms] transition-[color,box-shadow]" />
            </div>
        </div>
    )
}


export default ReviewBook;