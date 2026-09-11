import { IoMenu } from "react-icons/io5";
import logo from "../logo-text.png";

export function Nav() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

       
        <div className="shrink-0">
          <img
            src={logo}
            alt="DevStack logo"
            className="w-36 sm:w-40"
          />
        </div>

        
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <li>
            <a href="#" className="transition hover:text-green-600">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-green-600">
              Technologies
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-green-600">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-green-600">
              About
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-green-600">
              Contact
            </a>
          </li>
        </ul>


        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg  px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-500">
            Get Started
          </button>
        </div>

      
        <button className="rounded-lg border border-gray-300 px-3 py-2 text-xl md:hidden">
        <IoMenu/>
        </button>

      </div>
    </nav>
  );
}