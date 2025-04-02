import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="h-14 max-sm:h-20 py-5 px-10 max-sm:px-4 text-center text-xs flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2">
      <span>Made with ❤️ by Chetan</span>
      <span className="gap-3 flex">
        <Link
          href="https://x.com/chetan__789"
          target="_blank"
          className="underline"
        >
          <LuTwitter className="h-4 w-4 hover:scale-105" />
        </Link>
        <Link
          href="https://github.com/chetanchaudhari789"
          target="_blank"
          className="underline"
        >
          <LuGithub className="h-4 w-4 hover:scale-105" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/chetan789"
          target="_blank"
          className="underline"
        >
          <LuLinkedin className="h-4 w-4 hover:scale-105" />
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
