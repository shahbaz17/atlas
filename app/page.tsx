import Link from "next/link";
import { currentURL, vercelURL } from "./utils";
import { createDebugUrl } from "./debug";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Atlas Quiz",
    description: "A multi-page example for Atlas Quiz!",
    other: {
      ...(await fetchMetadata(
        new URL("/", vercelURL() || "http://localhost:3000")
      )),
    },
  };
}

export default async function Home() {
  const url = currentURL("/");

  return (
    <div>
      Atlas Quiz!
      <br />
      <Link href={createDebugUrl(url)} className="underline">
        Debug on Frames.js Debugger
      </Link>
    </div>
  );
}
