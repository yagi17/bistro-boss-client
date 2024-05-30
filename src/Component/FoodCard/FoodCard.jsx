import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()

  const { name, image, price, recipe, _id } = item;

  const handleAddToCurt = () => {
    if (user && user.email) {
      // Send To Data Base
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1300,
          });
          //  refetch the cert
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log-In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    // console.log(food, user.email);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute top-0 right-0 mr-4 mt-4 bg-slate-900 text-white px-4 ">
          ${price}
        </p>
      </figure>
      <div className="card-body p-6 flex items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions items-center">
          <button
            onClick={handleAddToCurt}
            className="btn btn-outline uppercase border-0 border-b-4 bg-slate-100 text-yellow-600 border-yellow-600 hover:text-yellow-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
