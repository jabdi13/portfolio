import Image, { StaticImageData } from "next/image";
import { Badge } from "./Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  priority?: boolean;
  viewLiveLabel?: string;
  githubLabel?: string;
}

/**
 * Project Card Component
 *
 * Displays a single project with image, description, tech stack, and action buttons.
 * Features hover effects for image zoom and button reveal.
 */
export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  technologies,
  liveUrl,
  githubUrl,
  priority = false,
  viewLiveLabel = "View Live",
  githubLabel = "GitHub",
}: ProjectCardProps) {
  return (
    <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[250px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        quality={85}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent group-hover:from-slate-900/95 dark:from-navy/95 dark:group-hover:from-navy/95 transition-all duration-500 flex flex-col justify-end p-6">
        <h4 className="text-2xl font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-navy hover:bg-gold-600 transition-colors focus-visible:ring-4 focus-visible:ring-gold-400"
            >
              {viewLiveLabel}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg border-2 border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-navy transition-all focus-visible:ring-4 focus-visible:ring-white"
            >
              {githubLabel}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
