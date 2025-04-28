import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white">
      {/* Logo on the left */}
      <div className="text-2xl font-bold text-gray-800">lever</div>

      {/* Buttons on the right */}
      <div className="flex gap-4">
        <Button>Admin Login</Button>
        <Button variant="outline">Member Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
