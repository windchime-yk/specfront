/** @jsx h */
import { h, VNode } from "../deps.ts";

interface LinkOptions {
  type?: "internal" | "external";
  href: string;
  children: string;
}

export const Link = ({ type, href, children }: LinkOptions): VNode => {
  const isExternal = (trueValue: string) =>
    type === "external" ? trueValue : undefined;

  return (
    <a
      class="underline"
      href={href}
      target={isExternal("_blank")}
      rel={isExternal("noreferrer noopener")}
    >
      {children}
    </a>
  );
};
