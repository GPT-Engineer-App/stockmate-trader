import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddTrade from "./pages/AddTrade.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-trade" element={<AddTrade />} />
      </Routes>
    </Router>
  );
}

export default App;