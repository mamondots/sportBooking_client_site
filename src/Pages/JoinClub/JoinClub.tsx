import img from "../../assets/img/club-thumb-two.png";
const JoinClub = () => {
  return (
    <div className="xl:px-20 px-12 py-6">
      <div className="grid lg:grid-cols-2 lg:gap-12 gap-6">
        <div>
          <p className="text-[#084C61] text-lg">Our Club</p>
          <h2 className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl  font-semibold leading-[1.1] text-[#3F3F3F] py-5">
            Do you want to be a professional golfer?
          </h2>
          <p className="text-lg text-[#686868]">
            We offer a lot of courses of varying difficulty and beautiful
            scenery that golfers of all skill levels can enjoy. You will learn
            golf from professionals with our competent and experienced staff.
            You will have a great fun with our magnificent illuminated field.
          </p>
          <div className="py-8">
            <button className="py-3 px-6 hover:bg-[#177E89] duration-300 cursor-wait bg-[#084C61] text-[#fff] rounded tracking-[1px]">
              Join Our Club
            </button>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
