import Art from "../components/Art";

export default function Home() {
  return (
    <div class="w-full flex justify-center overflow-x-hidden">
      <div class="h-screen w-full p-6 md:w-2/3 flex flex-col items-center justify-center">
        <Art imagePath="/imagewbg.png" />
        <div class="flex w-full items-center gap-4">
          <img src="/image.png" alt="logo" class="h-12" />
          <h1 class="text-white text-2xl md:text-3xl font-bold">Flora</h1>
        </div>
        <p class="text-white z-[10] self-start text-left text-lg md:text-xl leading-8 mt-6 mb-3">Flora is a team of developers aiming to create practical and useful solutions for real problems.</p>
        <div class="text-white z-[400] text-left self-start text-lg md:text-xl leading-8">
          Our current projects:{" "}
          <div class="inline-block group relative">
            <a href="https://orchid.rex.wf">orchid</a>
            <img src="/orchid.png" class="absolute scale-[5] lg:scale-[9] z-[500] md:group-hover:opacity-100 opacity-0 transition pointer-events-none top-[5rem] lg:top-[8.8rem] my-2 left-[2rem] lg:left-[4rem]" alt="" />
          </div>{" "}
          and{" "}
          <div class="inline-block group relative">
            <a href="#">aster</a>
            <img src="/aster.png" class="absolute scale-[7] lg:scale-[11] z-[500] md:group-hover:opacity-100 opacity-0 transition pointer-events-none top-[5rem] lg:top-[8.8rem] my-2 left-[-4rem] lg:left-[4rem]" alt="" />
          </div>
          {"."}
        </div>
        <div class="divider px-2 pt-[1px] bg-neutral-800 my-3"></div>
        <p class="text-sm text-left self-start z-[10]">
          Founded by <a href="https://namishh.me">nam</a> and <a href="https://rex.wf">rex</a>. Follow us on <a href="https://github.com/floraorg">GitHub</a>.
        </p>
      </div>
    </div>
  );
}
