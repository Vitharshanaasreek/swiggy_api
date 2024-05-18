import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="nav">
        <div>
          <Link to="/">
            <img src="/assets/logo.jpg"></img>
          </Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};
export default Header;
