import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");

  // subsscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const { user } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between bg-orange-200 p-5 items-center">
      <p
        className={`border-4 p-5 ${
          onlineStatus === true ? "border-green-700" : "border-red-700"
        }`}
      >
        logo
      </p>
      <ul className="flex gap-5">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/cart" className="font-bold text-xl">
            cart - ({cartItems.length} items)
          </Link>
        </li>
      </ul>
      <button
        className="w-24 py-3 rounded-md bg-slate-100 text-black"
        onClick={() =>
          login === "Login" ? setLogin("Sign up") : setLogin("Login")
        }
      >
        {login}
      </button>
      <p>{user}</p>
    </header>
  );
};

export default Header;
