import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 text-center left-0 w-full bg-gray-800 text-white h-[4 rem] py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://linktr.ee/innovisofttechnologies"
          className=" hover:text-primary font-medium"
          target="_blank"
        >
          Innovisoft
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
