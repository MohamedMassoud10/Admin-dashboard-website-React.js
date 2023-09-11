import "./globalstyles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {" "}
      <Home />{" "}
    </>
  );
};

export default App;
