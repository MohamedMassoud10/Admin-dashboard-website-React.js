import "./globalstyles.css";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return <>{isAuthenticated ? <Home /> : <Login />}</>;
};

export default App;
