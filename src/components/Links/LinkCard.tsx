'use client';

interface LinkCardProps {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}

export default function LinkCard({ title, description, iconSrc, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full max-w-md"
    >
      <img
        src={iconSrc}
        alt={`${title} 아이콘`}
        width={40}
        height={40}
        className="rounded"
      />
      <div>
        <h3 className="text-lg font-semibold text-yellow-400">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </a>
  );
}