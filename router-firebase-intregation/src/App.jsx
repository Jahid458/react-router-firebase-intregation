import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders.jsx";
import Products from "./components/Products/Products.jsx";
import Register from "./components/Register/Register.jsx";
import RequireAuth from "./components/RequireAuth/RequireAuth.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/products" element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
