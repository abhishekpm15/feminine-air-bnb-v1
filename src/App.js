import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchContext from "./context/SearchContext";
import ModalContext from "./context/ModalContext";
import AuthContext from "./context/AuthContext";
import FrontPage from "./pages/FrontPage";
import Hotels from "./pages/Hotels";
import ReserveContext from "./context/ReserveContext";
import ReservePage from "./pages/ReservePage";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <ReserveContext>
          <SearchContext>
            <ModalContext>
              <Router>
                <Routes>
                  <Route path="/" element={<FrontPage />} />
                  <Route path="/hotels/:id" element={<Hotels />} />
                  <Route path="/reserve" element={<ReservePage />} />
                </Routes>
              </Router>
            </ModalContext>
          </SearchContext>
        </ReserveContext>
      </AuthContext>
    </div>
  );
}

export default App;
