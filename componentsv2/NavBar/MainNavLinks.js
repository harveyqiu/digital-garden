import Link from "next/link";
import { motion } from "framer-motion";
import UnderlineHoverLink from "../../componentsv2/Links/UnderlineHoverLink";

export default function MainNavLinks() {
    return (
        <div>
            <div>

            </div>
            <div>
                <Link href="/diaries">
                    <UnderlineHoverLink href="/diaries">Diaries</UnderlineHoverLink>
                </Link>
                <Link href="/projects">
                    <UnderlineHoverLink href="/projects">Projects</UnderlineHoverLink>
                </Link>
                <Link href="/about">
                    <UnderlineHoverLink href="/about">About</UnderlineHoverLink>
                </Link>
            </div>
        </div>
    )
}