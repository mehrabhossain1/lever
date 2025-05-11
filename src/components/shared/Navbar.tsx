import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-sky-600 shadow-md">
      {/* <div className="text-2xl font-bold text-gray-800">Liver</div> */}
      <Link to="/" className="flex items-center gap-1">
        <img src="/Logo1.png" alt="Logo" className="h-20 lg:h-24" />

        <div className="hidden lg:block text-6xl font-bold text-white">
          BSLCTR
        </div>
      </Link>
      <div className="flex gap-2">
        <Button className="bg-blue-800 hover:bg-blue-900 rounded-full">
          Admin Login
        </Button>
        <Button variant="outline" className="rounded-full">
          Member Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
