import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

import { GithubIcon } from "@/components/Icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center"></div>

      <div className="flex gap-3">
        <Link isExternal as={NextLink} href={siteConfig.links.docs} className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}>
          Documentation
        </Link>
        <Link isExternal as={NextLink} className={buttonStyles({ variant: "bordered", radius: "full" })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
