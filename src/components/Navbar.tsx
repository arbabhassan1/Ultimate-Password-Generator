import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full h-[5rem] flex items-center justify-center sm:justify-between sm:px-[3rem] px-3 border-b-2 border-primary">
      <Link to={"/"} className="flex items-center justify-center gap-2">
        <picture>
          <source srcSet={Logo} type="image/webp" />
          <img src={Logo} alt="Logo" className="h-[3rem]" />
        </picture>
        <h1 className="font-bold text-xl">Ultimate Password Generator</h1>
      </Link>
      <div className="hidden sm:flex items-center justify-center gap-4">
        <FaGithub
          className="hover:text-primary text-2xl cursor-pointer"
          title="Github Repo"
        />
        <IoMdLink
          className="hover:text-primary text-2xl cursor-pointer"
          title="Link"
        />
      </div>
    </nav>
  );
};

export default Navbar;
