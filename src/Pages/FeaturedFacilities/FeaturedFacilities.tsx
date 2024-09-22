/* eslint-disable @typescript-eslint/no-explicit-any */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FacilitiesCard from "../FacilitiesPage/FacilitiesCard/FacilitiesCard";
import "./FeaturedFacilities.css";
import loader from "../../../src/Lottie/Animation - 1725387315784.json";

// type SildeBox = {
//   dots: boolean;
//   infinite: boolean;
//   speed: number;
//   slidesToShow: number;
//   slidesToScroll: number;
//   nextArrow: any;
// };

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import Lottie from "lottie-react";
import { useGetFacilitiesQuery } from "@/redux/features/facilities/facilitiesApi";
import { Key } from "react";

function SamplePrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-prev" onClick={onClick}>
      <BsArrowRightShort></BsArrowRightShort>
    </div>
  );
}

function SampleNextArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-next" onClick={onClick}>
      <BsArrowLeftShort></BsArrowLeftShort>
    </div>
  );
}

const FeaturedFacilities = () => {
  // const [ficilites, setFicilites] = useState([]);
  // useEffect(() => {
  //   fetch("Facility.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFicilites(data);
  //     });
  // }, []);

  const {
    data: facilites,
    isLoading,
    isError,
  } = useGetFacilitiesQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Lottie className="w-[30vh]" animationData={loader} loop={true} />
      </div>
    );
  }
  if (!isLoading && !isError && facilites.data.data?.length === 0) {
    return (
      <div className="text-center p-20 ">
        <h2 className="text-lg font-semibold">
          Can't find any products please reload the page and find products
        </h2>
      </div>
    );
  }

  const settings: any = {
    dots: false,
    infinite: true,
    gap: 2,
    nextArrow: <SampleNextArrow onClick={undefined} />,
    prevArrow: <SamplePrevArrow onClick={undefined} />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="xl:px-20 px-12">
      <div className="flex justify-center items-center py-12 flex-col">
        <p className="text-lg font-normal text-[#084C61]">Facilities</p>
        <h2 className="text-3xl font-bold">Featured Facilities</h2>
      </div>

      <div className="">
        <Slider {...settings}>
          {facilites?.data?.data
            .slice(0, 5)
            .map((facilite: { _id: Key | null | undefined }) => (
              <FacilitiesCard
                key={facilite._id}
                facilite={facilite}
                img={""}
                name={""}
                description={""}
                pricePerHour={0}
                location={""}
              ></FacilitiesCard>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedFacilities;
