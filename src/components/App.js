import { Outlet } from "react-router";
import Header from "./Header";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
//chunking
//code-spliting
//dynamic bundling
//lazy loading
//on-demand loading
//dynamic import
//lazy loading

const App = () => {
  const [username, setUsername] = useState("");

  // authentication code
  useEffect(() => {
    // make an api call to send username and password
    const data = {
      name: "Rahul Gupta",
    };
    setUsername(data["name"]);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ user: username, setUsername }}>
        <Header />
        <div className="container sm:max-w-sm md:max-w-4xl mx-auto">
          {/* <UserContext.Provider value={{ user: "Elon musk" }}> */}
          <div className="py-5">
            <Outlet />
          </div>
          {/* </UserContext.Provider> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
