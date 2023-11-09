import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Link href={"/about"} title="about">
        <i class="ri-information-line absolute cursor-pointer text-3xl sm:text-4xl text-gray-300 font-thin right-0 mr-4"></i>
      </Link>
      <body className="dark:bg-neutral-950 relative dark:text-white p-4 pb-20 bg-stone-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
