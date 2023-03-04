import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound404 from "./Pages/NotFound404"
import Store from "./Pages/Store"
import Register from "./Pages/Register"
import { useContext } from "react";
import { AuthContext } from "./Auth/authContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SingleBook from "./Pages/SingleBook";
import PriceRangeProvider from "./Context/priceRangeProvider";

AOS.init({
  offset: 200,
  duration: 600
});
function App() {
  const { isAuth } = useContext(AuthContext);
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="*" exact element={<NotFound404 />} />
        <Route path="/" exact element={isAuth ? <Home /> : <Navigate to="/login" />} />
        <Route path="/store" exact element={isAuth ? <PriceRangeProvider><Store /> </PriceRangeProvider> : <Navigate to="/login" />} />
        <Route path="/store/:slug" exact element={isAuth ? <SingleBook /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
