import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {  Navigate, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";
import Assignment5 from "./a5";
import Signin from "../users/signin";
import Signup from "../users/signup";



function Labs() {
  return (
    <Provider store={store}>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="a5" />} />
        <Route path="a3" element={<Assignment3 />} />
        <Route path="a4" element={<Assignment4 />} />
        <Route path="a5" element={<Assignment5 />} />
      </Routes>
    </div>
    </Provider>
  );
}
export default Labs;