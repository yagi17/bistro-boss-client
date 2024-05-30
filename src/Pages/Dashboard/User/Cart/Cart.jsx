import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Component/Section/SectionTitle";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      <div className=" flex justify-evenly">
        <h2 className="text-4xl"> Items: {cart.length}</h2>
        <h2 className="text-4xl"> Total Price: ${totalPrice}</h2>
        <button disabled={!cart.length} className="btn btn-primary">
          <Link to={"/dashboard/payment"}>Pay</Link>
        </button>
      </div>
      <div className="overflow-x-auto h-[530px] rounded-t-xl">
        <table className="table table-pin-rows">
          {/* head */}
          <thead>
            <tr>
              <th># No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
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
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn text-red-500 bg-transparent border-0 shadow-none hover:bg-transparent hover:scale-125 duration-300"
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
  );
};

export default Cart;
