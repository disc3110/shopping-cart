import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyStore
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="checkout"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;