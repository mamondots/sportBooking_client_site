import { Link } from "react-router-dom";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div>
      <div className="xl:px-20 px-12">
        <div className="bg-[#084C61] bannerBg rounded  py-12 px-12 text-white">
          <div className="z-10 relative">
            <h2 className="text-4xl font-semibold tracking-[2px]">Contact</h2>
            <p className="flex items-center gap-1 py-2 cursor-pointer">
              <Link to="/">
                <span className="hover:text-[#DB3A34] duration-300">Sport</span>
              </Link>
              <span> - </span> <span>Contact</span>
            </p>
          </div>
        </div>

        <div className="py-12">
          <div className="flex items-center justify-center text-center flex-col">
            <h2 className="text-4xl font-semibold">Contact Us</h2>
            <p className="lg:px-52 md:px-48 py-2 text-base text-[#686868]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              magni aspernatur. Aspernatur reprehenderit, vitae commodi vel
              tenetur inventore consectetur.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 py-6">
            <div className="border shadow-md flex items-center justify-center flex-col py-6">
              <p className="border p-2 text-6xl text-[#084C61]">
                <GiRotaryPhone />
              </p>
              <h2 className="text-xl font-bold py-2">Call Now</h2>

              <div className="text-base text-[#686868]">
                <p>+8801746770324</p>
                <p>+8801913444605</p>
              </div>
            </div>

            <div className="border shadow-md flex items-center justify-center flex-col py-6">
              <p className="border p-2 text-6xl text-[#084C61]">
                <MdEmail />
              </p>
              <h2 className="text-xl font-bold py-2">Email Address</h2>

              <div className="text-base text-[#686868] text-center">
                <p>almamon757@gmail.com</p>
                <p>admin658@gmail.com</p>
              </div>
            </div>

            <div className="border shadow-md flex items-center justify-center flex-col py-6">
              <p className="border p-2 text-6xl text-[#084C61]">
                <IoLocationSharp />
              </p>
              <h2 className="text-xl font-bold py-2">Location</h2>

              <div className="text-base text-[#686868] text-center">
                <p>Mirpur-1, Road No:20 House No:02</p>
                <p>Dhaka,Bamgladesh</p>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="text-center">
              <h2 className="lg:text-4xl md:text-2xl text-2xl  font-semibold">
                Get in touch with us.
              </h2>
              <p className="lg:px-52 md:px-48 py-2 lg:text-lg md:text-lg text-base text-[#686868]">
                Fill up the form and our team will get back to you within 24
                hours
              </p>
            </div>
            <form className="flex flex-col gap-2 mt-8 lg:px-48 px-12">
              <div className="lg:flex md:flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#686868] font-medium">
                    First Name
                  </label>
                  <input
                    className="px-4 py-2 border outline-none rounded"
                    type="text"
                    placeholder="Enter Your First Name..."
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#686868] font-medium">
                    Last Name
                  </label>
                  <input
                    className="px-4 py-2 border outline-none rounded"
                    type="text"
                    placeholder="Enter Your Last Name..."
                  />
                </div>
              </div>

              <div className="lg:flex md:flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#686868] font-medium">
                    Email
                  </label>
                  <input
                    className="px-4 py-2 border outline-none rounded"
                    type="email"
                    placeholder="Enter Your Email..."
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#686868] font-medium">
                    Phone
                  </label>
                  <input
                    className="px-4 py-2 border outline-none rounded"
                    type="text"
                    placeholder="Enter Your Phone..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="" className="text-[#686868] font-medium">
                  Message
                </label>
                <textarea
                  className="px-4 py-2 border outline-none rounded w-full"
                  placeholder="I would like to get touch with you..."
                  name=""
                  id=""
                  cols="8"
                  rows="6"
                ></textarea>
              </div>

              <div className="mt-4">
                <input
                  className="font-medium hover:bg-[#177E89] duration-300 cursor-pointer text-[#fff] bg-[#084C61] rounded px-6 py-3 tracking-[2px]"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <iframe
          className="w-full h-[50vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70032252558!2d90.34355868346047!3d23.794581992123334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sde!4v1724766713222!5m2!1sen!2sde"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
