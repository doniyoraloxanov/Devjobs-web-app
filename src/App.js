import { Routes, Route, Link, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CareerDetails from "./pages/CareerDetails";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div
      className="bg-gray-200 h-full min-h-screen dark:bg-gray-900"
      id="container"
    >
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<HomePage />} />
          <Route path="details/:id" element={<CareerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
