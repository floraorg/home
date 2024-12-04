export default function Projects() {
  return (
    <div class="w-full my-8 flex-wrap flex justify-start gap-4">
      <div class="div w-full md:w-[calc(50%-8px)]">
        <div class="w-full flex flex-col group project-card bg-neutral-950">
          <img src="/aster.png" alt="Aster project preview" class="w-full h-[18rem] object-cover opacity-60 group-hover:opacity-100 transition-all duration-300" />
          <div class="p-5">
            <div class="flex justify-between items-center mb-2">
              <p class="text-neutral-200">⭐ aster</p>
              <a href="" class="text-sm hover:text-rose-400 transition-colors duration-200">
                wip
              </a>
            </div>
            <p class="text-sm text-neutral-400">a much more easy to use and painless alternative to the default youtube studio.</p>
          </div>
        </div>
      </div>
      <div class="div w-full md:w-[calc(50%-8px)]">
        <div class="w-full group flex flex-col project-card bg-neutral-950">
          <img src="/orchid.png" class="w-full opacity-60 group-hover:opacity-100 transition-all duration-300 h-[18rem] object-cover" alt="Orchid project preview" />
          <div class="p-5">
            <div class="flex justify-between items-center mb-2">
              <p class="text-neutral-200">🌺 orchid</p>
              <a href="https://orchid.rex.wf" class="text-sm hover:text-rose-400 transition-colors duration-200">
                visit beta!
              </a>
            </div>
            <p class="text-sm text-neutral-400">a fast meme and profile picture editor packed with features, optimized to run on low end devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
