interface TeamMember {
  name: string;
  url: string;
  avatar: string;
}

const team: TeamMember[] = [
  {
    name: "namish",
    url: "https://namishh.me",
    avatar: "https://sakura.rex.wf/linear/namishh",
  },
  {
    name: "rex",
    url: "https://rex.wf",
    avatar: "https://sakura.rex.wf/linear/rexdotsh",
  },
];

export default function Team() {
  return (
    <div class="flex mt-6 flex-wrap gap-4">
      {team.map((member) => (
        <a href={member.url} class="group relative" aria-label={`${member.name}'s profile`}>
          <img src={member.avatar} class="h-12 w-12 rounded-full transition-all duration-200 group-hover:scale-105 group-hover:ring-2 ring-neutral-700" alt={member.name.toLowerCase()} />
        </a>
      ))}
    </div>
  );
}
