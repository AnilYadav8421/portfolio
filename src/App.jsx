import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
