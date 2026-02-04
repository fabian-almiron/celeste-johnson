import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';

interface NewsItemProps {
  title: string;
  publication: string;
  date: string;
  description: string;
  link?: string;
}

const NewsItem = ({ title, publication, date, description, link }: NewsItemProps) => {
  return (
    <article className="border-b border-neutral-200 pb-6 last:border-b-0">
      <div className="flex items-start gap-4">
        <div className="text-primary mt-1 flex-shrink-0">
          <FaNewspaper size={24} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
              {title}
            </h3>
            <div className="text-sm text-neutral-500 whitespace-nowrap">
              {date}
            </div>
          </div>
          <p className="text-primary-dark font-medium mb-2">
            {publication}
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            {description}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
            >
              Read Full Article
              <FaExternalLinkAlt className="ml-2" size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsItem;
