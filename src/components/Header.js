import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

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
          <Link to="#">cart</Link>
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
    </header>
  );
};

export default Header;
