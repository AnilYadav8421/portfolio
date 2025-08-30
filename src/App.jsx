import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-screen bg-background">
            <h1 className="text-5xl md:text-7xl font-bold text-primary animate-pulse">
              AY
            </h1>
            <div className="mt-6 w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
