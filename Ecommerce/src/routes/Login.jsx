import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import LoginTheme from "../components/Login/login";
import LoginSignUp from "../components/user/LoginSignUp";

const Login = () => {
  return (
    <div>
      <NavBar />
      <LoginSignUp />
      <Footer />
    </div>
  );
};

export default Login;
