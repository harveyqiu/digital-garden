import { RssIcon } from "@heroicons/react/solid";
import Link from "next/link";
import UnderlineHoverLink from "../Links/UnderlineHoverLink";

export default function Footer() {
  return (
    <div className=" footer">
        <div>
          <h3>Want to stay up to date?</h3>
          <Link href="/rss.xml">
            <button type="button">
              <RssIcon width="20" height="20" />
              Subscribe via RSS Feed
            </button>
          </Link>
        </div>
        <div className="flex flex-row">
          {[
            { text: "Essays", slug: "/essays" },
            { text: "About", slug: "/about" },
            { text: "Notes", slug: "/notes" },
            { text: "Changelog", slug: "/changelog" },
            { text: "Diaries", slug: "/diaries" },
            { text: "Library", slug: "/library" },
            { text: "Projects", slug: "/projects" },
          ].map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.slug}>
                  <UnderlineHoverLink href={link.slug}>
                    {link.text}
                  </UnderlineHoverLink>
                </Link>
              </li>
            );
          })}
        </div>
    </div>
  );
}
