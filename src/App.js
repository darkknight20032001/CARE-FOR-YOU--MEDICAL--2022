import "./App.css";
import DataContextProvider from "./Components/Context/DataContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Complain from "./Components/Complain/Complain";
function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complain" element={<Complain  />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
