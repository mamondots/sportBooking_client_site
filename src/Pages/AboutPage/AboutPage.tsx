import { Link } from "react-router-dom";
import about1 from "../../assets/img/about-thumb.png";
import about2 from "../../assets/img/club-thumb.png";
import man1 from "../../assets/img/man1.png";
import man2 from "../../assets/img/man2.png";
import man3 from "../../assets/img/man3.png";
import man4 from "../../assets/img/man4.png";
import { FaGolfBall } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { FaTeamspeak } from "react-icons/fa6";
import { FaCircleRadiation } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <div className="xl:px-20 px-12">
        <div className="bg-[#084C61] bannerBg rounded  py-12 px-12 text-white">
          <div className="z-10 relative">
            <h2 className="text-4xl font-semibold tracking-[2px]">About Us</h2>
            <p className="flex items-center gap-1 py-2 cursor-pointer">
              <Link to="/">
                <span className="hover:text-[#DB3A34] duration-300">Sport</span>
              </Link>
              <span> - </span> <span>About Us</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 py-6 mt-8">
          <div>
            <div>
              <p className="text-2xl text-[#177E89] font-semibold">About Us</p>
              <h2 className="lg:text-6xl md:text-6xl text-3xl font-semibold text-[#3F3F3F] py-4 lg:leading-[65px]">
                We Are The Best Sport Club In Your Local Area
              </h2>
              <p className="text-[#6b6a6a] text-lg">
                We offer a lot of Sport of varying difficulty and beautiful
                scenery that sport of all skill levels can enjoy. You will learn
                sport from professionals with our competent and experienced
                staff. You will have a great fun with our magnificent
                illuminated field.
              </p>
            </div>

            <div className="py-8 flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="p-4 text-2xl border border-[#177e8927]">
                  <p className="text-[#177E89]">
                    <IoFlagSharp />
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-medium py-1">
                    Professional Team
                  </h2>
                  <p className="text-[#262626c7]">
                    Modern & latest equipment with expert coaching
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-4 text-2xl border border-[#177e8927]">
                  <p className="text-[#177E89]">
                    <FaTeamspeak />
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-medium py-1">
                    Professional Trainings
                  </h2>
                  <p className="text-[#262626c7]">
                    Modern & latest equipment with expert coaching
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-4 text-2xl border border-[#177e8927]">
                  <p className="text-[#177E89]">
                    <FaCircleRadiation />
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-medium py-1">
                    Practice Facilities
                  </h2>
                  <p className="text-[#262626c7]">
                    Modern & latest equipment with expert coaching
                  </p>
                </div>
              </div>

              <div>
                <button className="px-6 py-3 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[2px] cursor-pointer hover:bg-[#177E89] duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={about1} alt="" />
            <div className="bg-[#084C61] absolute top-60 right-32 border-[12px] border-[#fff] hidden h-[50vh] w-[50vh] rounded-full lg:flex items-center justify-center flex-col gap-2">
              <p className="bg-[#FFFFFF] text-2xl text-[#084C61] p-4 rounded">
                <FaGolfBall />
              </p>
              <p className="text-4xl text-[#fff] font-semibold">30+</p>
              <h2 className="text-xl text-[#fff]">Years of experience</h2>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2  lg:gap-20 gap-4 py-6 mt-8">
          <div className="relative">
            <img src={about2} alt="" />
            <div className="px-10 py-6 bg-[#084C61] lg:flex flex-col hidden absolute top-[390px] rounded right-0">
              <p className="text-2xl text-[#fff] font-bold">+03</p>
              <h2 className="text-[#fff]">Years of experience</h2>
            </div>
          </div>

          <div>
            <div>
              <p className="text-2xl text-[#177E89] font-semibold">Club View</p>
              <h2 className="lg:text-6xl md:text-6xl text-3xl font-semibold text-[#3F3F3F] py-4 lg:leading-[65px]">
                Play and enjoy our club for free
              </h2>
              <p className="text-[#6b6a6a] text-lg">
                We offer a lot of Sport of varying difficulty and beautiful
                scenery that sport of all skill levels can enjoy. You will learn
                sport from professionals with our competent and experienced
                staff. You will have a great fun with our magnificent
                illuminated field.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 py-6 w-full">
              <div className="flex gap-4 flex-col">
                <p className="flex items-center  space-x-2">
                  <span className="bg-[#177E89] text-[#fff] text-sm p-1 rounded">
                    <FaCheck />
                  </span>
                  <span className="font-semibold text-[#177E89]">
                    300+ Sport Competitions
                  </span>
                </p>

                <p className="flex items-center  space-x-2">
                  <span className="bg-[#177E89] text-[#fff] text-sm p-1 rounded">
                    <FaCheck />
                  </span>
                  <span className="font-semibold text-[#177E89]">
                    Amateur Championships
                  </span>
                </p>
              </div>

              <div className="flex gap-4 flex-col">
                <p className="flex items-center  space-x-2">
                  <span className="bg-[#177E89] text-[#fff] text-sm p-1 rounded">
                    <FaCheck />
                  </span>
                  <span className="font-semibold text-[#177E89]">
                    Proficient on Golf
                  </span>
                </p>

                <p className="flex items-center  space-x-2">
                  <span className="bg-[#177E89] text-[#fff] text-sm p-1 rounded">
                    <FaCheck />
                  </span>
                  <span className="font-semibold text-[#177E89]">
                    Individual Support
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-2">
              <button className="px-6 py-3 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[2px] cursor-pointer hover:bg-[#177E89] duration-300">
                Join Our Club
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 mt-8">
          <div className="flex items-center justify-center flex-col">
            <p className="text-2xl text-[#177E89] font-semibold">Our Team</p>
            <h2 className="lg:text-6xl md:text-6xl text-3xl font-semibold text-[#3F3F3F] py-3 lg:leading-[65px]">
              Meet Our Experts
            </h2>
            <p className="text-[#6b6a6a] text-lg lg:px-72 text-center">
              Our Sports Club is a club with a history that goes back to XX
              century. From a cricket club to soccer tournaments
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-8 mt-8 cursor-pointer">
            <div className="group">
              <div className="border rounded overflow-hidden">
                <img
                  className="rounded group-hover:scale-110 duration-300 w-full"
                  src={man1}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center py-4 flex-col">
                <h2 className="text-2xl font-bold">Al Mamon</h2>
                <p className="text-[#6b6a6a] text-lg ">Cricket</p>

                <div className="flex justify-center items-center gap-2 py-2">
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaFacebookF />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaInstagramSquare />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaTwitter />
                  </p>

                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="border rounded overflow-hidden">
                <img
                  className="rounded group-hover:scale-110 duration-300 w-full"
                  src={man2}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center py-4 flex-col">
                <h2 className="text-2xl font-bold">Mariah Tah</h2>
                <p className="text-[#6b6a6a] text-lg ">Golfir</p>

                <div className="flex justify-center items-center gap-2 py-2">
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaFacebookF />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaInstagramSquare />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaTwitter />
                  </p>

                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="border rounded overflow-hidden">
                <img
                  className="rounded group-hover:scale-110 duration-300 w-full"
                  src={man3}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center py-4 flex-col">
                <h2 className="text-2xl font-bold">Riaz Shikder</h2>
                <p className="text-[#6b6a6a] text-lg ">Footboller</p>

                <div className="flex justify-center items-center gap-2 py-2">
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaFacebookF />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaInstagramSquare />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaTwitter />
                  </p>

                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="border rounded overflow-hidden">
                <img
                  className="rounded group-hover:scale-110 duration-300 w-full"
                  src={man4}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center py-4 flex-col">
                <h2 className="text-2xl font-bold">Fathama Khaton</h2>
                <p className="text-[#6b6a6a] text-lg ">Gollfer</p>

                <div className="flex justify-center items-center gap-2 py-2">
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaFacebookF />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaInstagramSquare />
                  </p>
                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaTwitter />
                  </p>

                  <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
