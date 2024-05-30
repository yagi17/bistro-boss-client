import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaFirstOrder,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

const Dashboard = () => {
  const [cart] = useCart([]);
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div
        className={
          isAdmin
            ? "w-64 min-h-screen bg-green-500"
            : "w-64  min-h-screen bg-orange-400"
        }
      >
        <ul className="menu">
          {isAdmin ? (
            // admin section
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            // user section
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAd /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaList /> My Bookings
                </NavLink>
              </li>
            </>
          )}

          {/* shared nav links */}
          <div className="divider"></div>

          <li>
            <NavLink to={"/"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaFirstOrder /> Order Food
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleLogout} to={"/login"}>
              <FiLogOut />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
