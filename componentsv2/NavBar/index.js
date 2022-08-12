import {motion} from "framer-motion";
import Link from "next/link";
import Logo from "../visuals/Logo";
import MainNavLinks from "./MainNavLinks";

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
                    <Logo />
                </a>
            </Link>
            <div className="flex items-center">
                <MainNavLinks />
            </div>
        </motion.nav>
    )
}