import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-base-200 shadow-xl">
      <div className="px-10 py-4 border-b-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"} className="text-2xl">
            ShopHub
          </Link>
          {/* Navbar links */}
          <div>
            <ul className="flex gap-2">
              <li>
                <Link className="px-4 py-2 rounded-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="px-4 py-2 hover:bg-a rounded-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground" to={"/checkout"}>Cart</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>
                <Link className="btn bg-slate-600" to={"/auth"}>Login</Link>
              </li>
              <li>
                <Link className="btn bg-blue-500" to={"/auth"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
