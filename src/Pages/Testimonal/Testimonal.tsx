import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonal = () => {
  const [testimonals, setTestimonals] = useState([]);
  useEffect(() => {
    fetch("Testimonal.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonals(data);
      });
  }, []);

  const settings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="xl:px-20 px-12 py-12 mt-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="py-6 flex  flex-col">
          <p className="text-[#084C61] text-lg">Testimonial</p>
          <h2 className="lg:text-6xl md:text-6xl  sm:text-4xl text-3xl  font-semibold leading-[1.5] text-[#3F3F3F] py-3">
            Our Members Thinking About Us
          </h2>
          <p className="py-3 text-lg text-[#555555]">
            Our professional team will make sure that you find the right course
            and the best trainer to receive maximum efficiency. All our trainers
            are professional golf players with the highest...
          </p>

          <div className="py-2 mt-2">
            <button className="px-8 py-4 hover:bg-[#177E89] cursor-pointer duration-300 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[1px]">
              Join Our Club
            </button>
          </div>
        </div>

        <div className="">
          <Slider {...settings}>
            {testimonals.map((testimonal, index) => (
              <div key={index} className="border py-12 px-6 shadow-md">
                <div className="flex items-center justify-center flex-col">
                  <p className="text-4xl text-[#CECECE]">
                    <FaQuoteLeft />
                  </p>
                  <div className="py-3">
                    <Rating
                      style={{ maxWidth: 110 }}
                      value={testimonal.rating}
                      readOnly
                    />
                  </div>

                  <div>
                    <p className="px-12 text-center text-lg text-[#5c5b5b] py-2">
                      {testimonal.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <img className="rounded-full" src={testimonal.img} alt="" />
                    <div>
                      <h2 className="font-semibold text-lg">
                        {testimonal.name}
                      </h2>
                      <p className="text-[#5c5b5b]">{testimonal.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
