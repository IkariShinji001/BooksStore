
import Button from "./Button";


function Banner() {
    return (
        <div data-aos="fade-up" className="flex h-full mx-auto max-w-screen-xl justify-between pt-10 pb-20">
            <div className="w-5/12">
                <div className="flex flex-col justify-center w-full h-full">
                    <span className="text-2xl text-white font-cardo relative"><span className="w-10 h-0.5 bg-secondary-yellow absolute block top-1/2"></span> <h3 className="ml-12 italic">Welcome to Books Store</h3></span>
                    <h1 className="mt-4 text-6xl text-white font-cardo font-bold">DanMachi Light Novel Volume 16</h1>
                    <p className="text-[#B4C7E7] font-sans">It's an honest-to-goddess date!<br />
                        After every Elegia, there must be a Goddess Festival.
                        The celebration of the harvest is meant to clear away the somber mood hanging over the city and bring about joy and laughter.
                        The festival promises to be anything but fun for Bell, though, after a love letter is hand delivered to him by a high-ranking member of Freya Familia - and it's from Syr of all people!
                        <br />
                        What's Syr's connection to one of the strongest familias in the city? Why did she choose this moment to ask him out? And what will his answer be?!
                    </p>
                    <div>
                        <Button className="w-52 h-14 mt-8 font-cardo text-lg hover:scale-110 hover: rounded transition" background={"#ffca42"} title={"Order Today"} />
                        <span className="ml-20 text-white font-cardo cursor-pointer text-lg underline">Read Free Demo</span>
                    </div>

                    <div>
                        <table className="w-full">
                            <tbody>

                                <tr className="mt-8 flex justify-around text-xl text-white font-cardo">
                                    <td className="w-full"><i className="fa-solid fa-circle text-xs text-secondary-yellow"></i> Pages:</td>
                                    <td className="w-full"><i className="fa-solid fa-circle text-xs text-secondary-yellow"></i> Length:</td>
                                    <td className="w-full"><i className="fa-solid fa-circle text-xs text-secondary-yellow"></i> Ratings:</td>
                                </tr>
                                <tr className="flex justify-around text-lg text-[#B4C7E7] font-cardo">
                                    <td className="w-full">589pages</td>
                                    <td className="w-full">12 hours</td>
                                    <td className="w-full">4.3/5(204 ratings)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div data-aos="zoom-in-up" className="w-5/12 border-solid border-border-img border-8">
                <img
                    src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/119200715_179137923678293_4417760804110970647_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=irTDMvOQdBsAX9GAL_p&_nc_ht=scontent.fvca1-2.fna&oh=00_AfCh6gtTrbl27c3marNttaAttdSzpHeJ4_MeL4buqtDmzA&oe=641F0DE7"
                    alt=""
                    className="w-min" />
            </div>
        </div>

    )
}


export default Banner;