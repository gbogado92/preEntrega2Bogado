import "bootstrap/dist/css/bootstrap.min.css";
import imagen from "./logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-center">
      <div className="container-md d-flex justify-content-center align-items-center">
        <img src={imagen} alt="logo" width={200} />
      </div>
    </nav>
  );
};

export default Navbar;
