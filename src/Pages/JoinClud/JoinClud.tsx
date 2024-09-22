import "./JoinClud.css";
const JoinClud = () => {
  return (
    <div className="xl:px-20 px-12 joinBg">
      <div className="bg-[#bbded59c] lg:ml-[600px] lg:w-2/4 py-12 px-8">
        <div>
          <p className="text-[#084C61] font-medium py-2 text-xl">Join Club</p>
          <h2 className="text-5xl font-semibold text-[#3F3F3F] py-2">
            Join our club
          </h2>
        </div>

        <div className="py-6">
          <form className="flex flex-col gap-3">
            <div className="flex gap-3 w-full">
              <input
                className="w-full py-2 px-4 bg-[#fff] outline-none rounded"
                type="text"
                placeholder="Your name"
              />
              <input
                className="w-full py-2 px-4 bg-[#fff] outline-none rounded"
                type="text"
                placeholder="Your phone"
              />
            </div>
            <div className="flex gap-3 w-full">
              <input
                className="w-full py-2 px-4 bg-[#fff] outline-none rounded"
                type="email"
                placeholder="Your email"
              />
              <input
                className="w-full py-2 px-4 bg-[#fff] outline-none rounded"
                type="text"
                placeholder="Websites URL"
              />
            </div>
            <div>
              <textarea
                className="w-full py-2 px-4 bg-[#fff] outline-none rounded"
                name=""
                placeholder="Message"
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div>
              <button className="px-6 py-3 hover:bg-[#177E89] cursor-pointer duration-300 bg-[#084C61] text-[#fff] text-base rounded tracking-[1px]">
                Join Our Club
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinClud;
