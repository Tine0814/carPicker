import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarSelectionPage from "./pages/private/CarSelectionPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarSelectionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
