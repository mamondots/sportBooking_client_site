const MyBooking = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold py-2">Manage Your Bookings</h2>
        <p className="lg:pr-52 text-[#6b6b6b]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          fugiat reiciendis voluptates perspiciatis ex accusantium in ratione
          illum quisquam nostrum deserunt, eum aut incidunt facere!
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 gap-4 border-b pb-4 justify-items-center items-center">
        <p>Index</p>
        <p>Facility</p>
        <p>Amount</p>
        <p>Date</p>
        <p>Start Time</p>
        <p>End Time</p>
        <p>Status</p>
        <p>Action</p>
      </div>

      <div className="flex justify-center items-center py-20 pb-56">
        <h2 className="text-[#26262675]">You have no Booking</h2>
      </div>
    </div>
  );
};

export default MyBooking;
