import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../Component/Section/SectionTitle";
import useMenu from "../../../../Hooks/useMenu";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();

  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`menu/${item._id}`);
        // axiosSecure.delete(`menu/${id}`)
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been removed`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"Hurry UP"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto h-[530px] rounded-t-xl">
          <table className="table table-pin-rows">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th></th>
                <th>ITEM IMAGE </th>
                <th>ITEM NAME </th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-md bg-[#D1A054] text-white border-0 shadow-none hover:bg-[#D1A054]">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-red-700  text-white border-0 shadow-none hover:bg-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
