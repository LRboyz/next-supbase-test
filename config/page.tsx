import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/config/primitives";
import { GithubIcon } from "@/components/Icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hello EveryOne&nbsp;</h1>

        <h1 className={title()}>WelCome to INSTANT NOTE .</h1>
        <h4 className={subtitle({ class: "mt-4" })}>Beautiful, fast and modern React UI library.</h4>
      </div>

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