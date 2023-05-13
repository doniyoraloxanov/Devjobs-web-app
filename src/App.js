import { Routes, Route, Link, useParams } from "react-router-dom";
import HomePage from "./components/HomePage";
import CareerDetails from "./pages/CareerDetails";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-200 h-full min-h-screen" id="container">
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
