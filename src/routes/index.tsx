import AsciiArtConverter from "~/components/Art";
import MagicLink from "~/components/MagicLink";

export default function Home() {
  return (
    <div class="w-screen text-white h-screen flex bg-neutral-950 justify-center items-center overflow-x-hidden">
      <div class="md:w-1/2 relative mb-12 sm:w-4/5 w-full lg:w-2/5 p-4">
        <div class="absolute inset-0 top-0 flex items-center justify-center h-full w-full pointer-events-none opacity-60">
          <AsciiArtConverter filename="/imagewbg.png"/>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-center gap-4">
            <img src="/favicon.png" alt="asdf" class="h-12 w-12" />
            <h1 class="text-2xl font-semibold">Flora</h1>
          </div>
          <p class="leading-6 mt-4 text-neutral-100">
            We make random but practical utilities for the web that actually solve real problems. Current projects - <MagicLink href="https://orchird.rex.wf" previewImage="/orchid.png">
              orchid (beta)
            </MagicLink> and  <MagicLink href="/" previewImage="/aster.png">aster (closed)</MagicLink>.
          </p>
          <div class="px-2 my-4 pt-[1px] bg-neutral-800" />
          <p class="text-neutral-300 text-sm">
            By <a href="https://namishh.me" class="link hover:underline">nam</a> and{" "}
            <a href="https://rex.wf" class="link hover:underline">rex</a>. Follow us on{" "}
            <a href="https://twitter.com/floraorg" class="link hover:underline">x dot com</a> and{" "}
            <a href="https://github.com/floraorg" class="link hover:underline">github</a>.
          </p>
        </div>
      </div>
    </div>
  );
}