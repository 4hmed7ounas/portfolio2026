interface SkillBadgeProps {
  name: string;
  className?: string;
}

export default function SkillBadge({ name, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-block px-3.5 py-1.5 text-sm font-medium rounded-full bg-accent-light text-accent border border-accent/10 ${className}`}
    >
      {name}
    </span>
  );
}
