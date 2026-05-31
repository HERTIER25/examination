import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center">

        <h1 className="text-xl font-bold">
          EPMS
        </h1>

        <div className="flex gap-4">

          <Link
            to="/employee"
            className="hover:text-yellow-300"
          >
            Employee
          </Link>

          <Link
            to="/department"
            className="hover:text-yellow-300"
          >
            Department
          </Link>

          <Link
            to="/salary"
            className="hover:text-yellow-300"
          >
            Salary
          </Link>

          <Link
            to="/reports"
            className="hover:text-yellow-300"
          >
            Reports
          </Link>

          <Link
            to="/"
            className="hover:text-red-300"
          >
            Logout
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;