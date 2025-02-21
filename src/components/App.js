import { Outlet } from "react-router";
import Header from "./Header";

//chunking
//code-spliting
//dynamic bundling
//lazy loading
//on-demand loading
//dynamic import
//lazy loading

const App = () => {
  return (
    <>
      <Header />
      <div className="container sm:max-w-sm md:max-w-4xl mx-auto">
        <div className="py-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
