import { Suspense,lazy } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import "./App.css";
import { MyContextProvider } from "./components/context/Context";

// import PickedRm from "./pages/rmScreens/pickedRm";
const WelcomePage = lazy(() => import("./pages/welcomePage"));
const VideoCall = lazy(() => import("./pages/videoCall"));

function App() {
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName);
      });
    });
  }
  return (
    <MyContextProvider>
      <Router>
        <Suspense
          fallback={
            <>
            {"Loading....."}
            </>
          }
        >
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/room" element={<VideoCall />} />
          
          </Routes>
        </Suspense>
      </Router>
    </MyContextProvider>
  );
}

export default App;
