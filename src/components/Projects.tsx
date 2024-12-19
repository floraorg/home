interface Project {
  title: string;
  emoji: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string;
}

const projects: Project[] = [
  {
    title: "aster",
    emoji: "⭐",
    description: "a much more easy to use and painless alternative to the default youtube studio.",
    image: "/aster.png",
    linkText: "wip",
  },
  {
    title: "orchid",
    emoji: "🌺",
    description: "a meme and pfp editor packed with features, built to run on low end devices.",
    image: "/orchid.png",
    link: "https://orchid.rex.wf",
    linkText: "visit beta!",
  },
];

export default function Projects() {
  return (
    <div class="w-full flex-wrap flex justify-start gap-4">
      {projects.map((project) => (
        <div class="div w-full md:w-[calc(50%-8px)]">
          <div class="w-full flex flex-col group project-card bg-neutral-950 overflow-hidden">
            <div class="relative overflow-hidden">
              <img src={project.image} alt={`${project.title} project preview`} class="w-full h-[15rem] object-cover opacity-60 transition-all duration-500 transform group-hover:opacity-100 group-hover:scale-105" />
            </div>
            <div class="p-5">
              <div class="flex justify-between items-center mb-2">
                <p class="text-neutral-200">
                  {project.emoji} {project.title}
                </p>
                {project.link ? (
                  <a href={project.link} class="text-sm hover:text-rose-400 transition-colors duration-200">
                    {project.linkText}
                  </a>
                ) : (
                  <span class="text-sm text-neutral-500">{project.linkText}</span>
                )}
              </div>
              <p class="text-sm text-neutral-400">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
