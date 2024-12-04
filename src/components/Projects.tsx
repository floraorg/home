export default function Projects() {
  return (
    <div class="w-full my-8 flex-wrap flex justify-start">
      <div class="div w-full md:w-1/2 pb-2 pr-0 md:pb-0 md:pr-2">
        <div class="w-full flex flex-col group">
          <img src="https://i.imgur.com/abJGvtz.png" alt="" class="w-full h-[18rem] object-cover opacity-60 group-hover:opacity-100 transition" />
          <div class="p-4 bg-neutral-950">
            <div class="flex justify-between">
              <p class="text-neutral-300">⭐ aster</p>
              <a href="" class="text-sm">
                wip
              </a>
            </div>
            <p class="text-sm">a much more easy to use and painless alternative to the default youtube studio.</p>
          </div>
        </div>
      </div>
      <div class="div w-full md:w-1/2 pt-2 md:pt-0 pl-0 md:pl-2">
        <div class="w-full group flex flex-col">
          <img src="https://i.imgur.com/AtDcSFO.png" class="w-full opacity-60 group-hover:opacity-100 transition h-[18rem] object-cover" alt="" />
          <div class="p-4 bg-neutral-950">
            <div class="flex justify-between">
              <p class="text-neutral-300">🌺 orchid</p>
              <a href="https://orchid.rex.wf" class="text-sm">
                visit beta!
              </a>
            </div>
            <p class="text-sm">a fast meme and profile picture editor packed with features, optimized to run on low end devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
