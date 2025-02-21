import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
const Home = lazy(() => import("./src/components/Home"));
const Contact = lazy(() => import("./src/components/Contact"));
const About = lazy(() => import("./src/components/About"));
const Error = lazy(() => import("./src/components/Error"));
const App = lazy(() => import("./src/components/App"));
const Restaurant = lazy(() => import("./src/components/Restaurant"));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="restaurants/:id" element={<Restaurant />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
