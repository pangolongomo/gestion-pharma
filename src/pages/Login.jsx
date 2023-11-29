import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <h1>Login page</h1>

      <button onClick={() => handleClick("/home")}>Accueil</button>
      <button onClick={() => handleClick("/products")}>Produits</button>
    </>
  );
}
export default Login;
