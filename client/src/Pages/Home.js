import Header from "../Components/Header"
import Banner from "../Components/Banner";
import ReviewBook from "../Components/ReviewBook";
import Button from "../Components/Button";
import TestimonialReader from "../Components/TestimonialUser";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Home() {

    return (
        <div className="w-screen bg-primary-blue h-auto">
            <Header />
            <Banner />
            <div className="bg-white-2 pt-20 relative">
                <div className="h-full mx-auto max-w-screen-xl">
                    <h2 className="text-center font-cardo text-4xl font-bold">Another Book</h2>
                    <span className="h-1 w-20 absolute bg-secondary-yellow top-8 left-1/2 mt-24 -translate-x-1/2"></span>
                    <div className="flex flex-wrap h-full mx-auto max-w-screen-xl justify-between mt-20 pb-14">
                        <ReviewBook
                            imgCover={"https://i.redd.it/9jkrmbb94ty31.jpg"}
                            title={"Danmachi Volume 14"}
                            description={"The prophecy of despair continues...When an unprecedented calamity on the twenty-seventh floor leaves Bell and Lyu stranded,..."}
                            pages={"589"}
                            length={"12"}
                        />

                        <ReviewBook
                            imgCover={"https://i.redd.it/9jkrmbb94ty31.jpg"}
                            title={"Danmachi Volume 14"}
                            description={"The prophecy of despair continues...When an unprecedented calamity on the twenty-seventh floor leaves Bell and Lyu stranded,..."}
                            pages={"589"}
                            length={"12"}
                        />

                        <ReviewBook
                            imgCover={"https://i.redd.it/9jkrmbb94ty31.jpg"}
                            title={"Danmachi Volume 14"}
                            description={"The prophecy of despair continues...When an unprecedented calamity on the twenty-seventh floor leaves Bell and Lyu stranded,..."}
                            pages={"589"}
                            length={"12"}
                        />

                        <ReviewBook
                            imgCover={"https://i.redd.it/9jkrmbb94ty31.jpg"}
                            title={"Danmachi Volume 14"}
                            description={"The prophecy of despair continues...When an unprecedented calamity on the twenty-seventh floor leaves Bell and Lyu stranded,..."}
                            pages={"589"}
                            length={"12"}
                        />
                    </div>
                    <div className="w-full flex justify-center pb-20">
                        <Link to="/store" className="w-full h-14 flex justify-center">
                            <Button title={"Go To Store"} className=" border-solid border-secondary-yellow bg-secondary-yellow border-2 w-4/12 h-14 font-bold font-cardo text-lg
                hover:shadow-[inset_27rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"  />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#F4F8FF] pt-20">
                <div className="h-auto mx-auto max-w-screen-xl flex">
                    <div className="w-4/12 flex flex-col relative justify-center">
                        <h1 className="font-cardo font-bold text-3xl">What Customer Say <br /> About the Store</h1>
                        <span className="h-1 w-20 absolute bg-secondary-yellow top-72"></span>
                        <p className="mt-16 text-[#969AA0]">If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            All the Lorem Ipsum generators.</p>
                        <div className="w-5/12 flex justify-between text-secondary-yellow mt-4 items-center">
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle-half-stroke"></i> <p className="font-cardo text-primary-blue text-lg ml-2 font-bold">(4.5/5)</p>
                        </div>
                        <p className="text-primary-blue mt-2">Overall Customer Ratings</p>
                    </div>

                    <div className="w-4/12 h-4/5 flex flex-col gap-6 py-32">
                        <TestimonialReader />

                        <TestimonialReader />
                    </div>

                    <div className="flex flex-col w-3/12 justify-center items-center ml-14">
                        <TestimonialReader />
                    </div>
                </div>
            </div>


            <Footer />
        </div >

    )
}

export default Home;