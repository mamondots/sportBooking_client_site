import { useGetUserQuery } from "@/redux/features/user/userApi";

const AllUser = () => {
  const { data: users, isLoading } = useGetUserQuery([]);
  console.log(users);
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold py-2"> All User</h2>
        <p className="lg:pr-52 text-[#6b6b6b]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          fugiat reiciendis voluptates perspiciatis ex accusantium in ratione
          illum quisquam nostrum deserunt, eum aut incidunt facere!
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 border-b pb-4 justify-items-center items-center">
        <p>Index</p>
        <p>Name</p>
        <p>Email</p>
        <p>Address</p>
        <p>Phone</p>
        <p>Role</p>
      </div>

      <div className="mt-2 ">
        {isLoading ? (
          <p className="flex items-center justify-center py-20">Loading...</p>
        ) : users.data && users.data.length > 0 ? (
          users?.data.map(
            (
              user: {
                name?: string;
                email?: string;
                address?: string;
                phone?: string;
                role?: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 space-y-2 border-b pb-2 justify-items-center items-center text-center"
              >
                <p>{index + 1}</p>
                <p>{user.name || "N/A"}</p>
                <p>{user.email || "N/A"}</p>
                <p>{user.address || "N/A"}</p>
                <p>{user.phone || "N/A"}</p>
                <p>{user.role || "N/A"}</p>
              </div>
            )
          )
        ) : (
          <p className="flex items-center justify-center py-20">
            There are no users
          </p>
        )}
      </div>
    </div>
  );
};

export default AllUser;
