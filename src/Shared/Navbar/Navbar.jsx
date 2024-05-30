import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to={"/dashboard"}>
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </NavLink>
        </li>
      ) : (
        <></>
      )}

      {user ? (
        <>
          {/* <p>{user.displayName}</p> */}
          <li>
            <NavLink onClick={handleLogout} to={"/login"}>
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar max-w-screen-xl mx-auto fixed z-50 text-white bg-black/50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-xl cursor-pointer">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
