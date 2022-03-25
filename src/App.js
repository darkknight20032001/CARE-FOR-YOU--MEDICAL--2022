import "./App.css";
import { useState } from "react";
import DataContextProvider from "./Components/Context/DataContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Complain from "./Components/Pages/Complain/Complain";
import HospitalPage from "./Components/Pages/Index/HospitalPage";
function App() {
  const [hospitalName, setHospitalName] = useState("");
  const getHospitalName = (name) => {
    setHospitalName(name);
  };
  console.log(hospitalName);
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HospitalPage getHospitalName={getHospitalName} />}
          />
          <Route path={hospitalName} element={<Home />} />
          <Route path={`${hospitalName}/complain`} element={<Complain />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
