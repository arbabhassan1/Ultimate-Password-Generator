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
        <a href="https://github.com/arbabhassan1/" target="_blank">
          {" "}
          <FaGithub
            className=" text-2xl hover:scale-125 cursor-pointer"
            title="Github Repo"
          />
        </a>
        <a href="https://arbabhassan.bio.link" target="_blank">
          <IoMdLink
            className=" hover:scale-125 text-2xl cursor-pointer"
            title="Link"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
