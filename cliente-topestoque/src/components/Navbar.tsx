import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo text-blue-800 cursor-pointer hover:text-white">  <a href="/">TopEstoque</a>
        </h1>

        <nav className="nav-links">
          <a href="/">Dashboard</a>
          <a href="/explore">Explore</a>
          <a href="/manage-items">Manage Items</a>
          <a href="/manage-categories">Manage Categories</a>
          <a href="/manage-users">Manage Users</a>
        </nav>

        {/*<div className="nav-icons">
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>*/}
      </div>
    </header>
  );
};

export default Navbar;
