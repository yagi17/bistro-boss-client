import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Component/Section/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data.data.display_url);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.category,
        image: res.data.data.display_url,
      };
      // console.log(menuItem);

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset()
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Update Item info"}
      ></SectionTitle>

      <div className="bg-gray-200 rounded-xl p-4 ">
        <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control w-full">
            <label className="label-text font-semibold pb-2">First Name</label>
            <input
              {...register("name", { required: true })}
              defaultValue={name}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                Name field is required
              </span>
            )}
          </div>

          <div className="flex gap-4">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label-text font-semibold pb-2">Category</label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value={"default"}>
                  Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label-text font-semibold pb-2">Price</label>
              <input
                defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control w-full">
            <label className="label-text font-semibold pb-2">
              Recipe Details
            </label>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>

          {/* file input */}
          <div className="form-control">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              Update Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
