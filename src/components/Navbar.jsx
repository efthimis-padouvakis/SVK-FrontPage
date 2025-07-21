import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-500 ${
        scrolled ? "bg-primary" : "bg-black/30 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-18 h-12 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              {nav.id === "Eshop" ? (
                <a
                  href="https://svkroboticsedu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActive(nav.title)}
                  className={`flex items-center gap-2 text-[16px] font-medium px-4 py-2 rounded-md transition ${
                    active === nav.title
                      ? "bg-green-600 text-white"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  <FaShoppingCart className="text-lg" />
                  {nav.title}
                </a>
              ) : (
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`flex items-center text-[16px] font-medium px-4 py-2 rounded-md transition ${
                    active === nav.title
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white hover:text-white hover:bg-white/20"
                  }`}
                >
                  {nav.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="text-white hover:text-white text-[18px] font-medium cursor-pointer"
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  {nav.id === "Eshop" ? (
                    <a
                      href="https://svkroboticsedu.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center gap-2"
                    >
                      <FaShoppingCart className="text-xl" />
                      {nav.title}
                    </a>
                  ) : (
                    <a
                      href={`#${nav.id}`}
                      className="bg-white/10 text-white px-4 py-2 rounded-md hover:bg-white/20 transition"
                    >
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
