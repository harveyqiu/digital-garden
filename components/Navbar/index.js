import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../visuals/Logo";
import MainNavLinks from "./MainNavLinks";
import MobileMenu from "./MobileMenu";
// import SearchBarAndResults from "../search/SearchBarAndResults";

export default function Navbar() {
  return (
    <motion.nav
    className="flex flex-row justify-between p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <Link href="/">
        <a aria-label="home" href="/">
          <span className="visually-hidden">Home</span>
          <Logo />
        </a>
      </Link>
      <div className="flex items-center">
        <MainNavLinks />
      </div>
      <MobileMenu />
    </motion.nav>
  );
}