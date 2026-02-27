import { Newspaper, ExternalLink, ArrowRight } from 'lucide-react';

interface NewsItemProps {
  title: string;
  publication: string;
  date: string;
  description: string;
  link?: string;
}

const NewsItem = ({ title, publication, date, description, link }: NewsItemProps) => {
  return (
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-neutral-200 hover:border-secondary/50 hover:translate-y-[-6px] overflow-hidden">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Newspaper size={28} />
          </div>

          {/* Publication & Date */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-sm font-bold text-secondary uppercase tracking-wide">
                {publication}
              </p>
              <div className="text-xs text-neutral-500 whitespace-nowrap flex-shrink-0 bg-neutral-100 group-hover:bg-secondary/10 px-3 py-1 rounded-full transition-colors duration-300 font-medium">
                {date}
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-700 leading-relaxed mb-6 md:text-lg">
          {description}
        </p>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-bold transition-all duration-300 group/link"
          >
            Read Full Article
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        )}
      </div>
    </article>
  );
};

export default NewsItem;
