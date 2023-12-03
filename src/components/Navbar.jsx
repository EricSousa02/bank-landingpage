import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const itemControls = useAnimation();

  useEffect(() => {
    itemControls.start({ opacity: 1, x: 0 });
  }, [itemControls]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="w-full flex py-6 justify-between items-center navbar"
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            initial={{ opacity: 0, x: -20 }}
            animate={itemControls}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                initial={{ opacity: 0, x: -20 }}
                animate={itemControls}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
