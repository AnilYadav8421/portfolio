import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

const FallbackLoader = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-background">
    <h1 className="text-5xl md:text-7xl font-bold text-primary animate-pulse">
      AY
    </h1>
    <div className="mt-6 w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000); // 1 sec delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={showLoader ? <FallbackLoader /> : null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
