import DataContext from "./DataContext";
import { useState } from "react";
const DataContextProvider = (props) => {
  const [ward, setWard] = useState("Covid Ward");
  return (
    <DataContext.Provider value={{ ward, setWard }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
