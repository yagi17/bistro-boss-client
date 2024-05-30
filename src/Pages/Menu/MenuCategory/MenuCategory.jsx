import { Link } from "react-router-dom";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import SharedCover from "../../../Shared/SharedCover/SharedCover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="">
      {title && <SharedCover img={coverImg} title={title}></SharedCover>}
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link className="justify-center flex my-16" to={`/order/${title}`}>
        <button className="btn btn-outline uppercase border-0 border-b-4 bg-slate-100 text-yellow-600 border-yellow-600 hover:text-yellow-600">
          order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
