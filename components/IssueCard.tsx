import { ReactNode } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

interface IssueCardProps {
  icon: ReactNode;
  title: string;
  quote: string;
  points: string[];
  imagePosition: 'left' | 'right';
  backgroundColor: string;
}

const IssueCard = ({
  icon,
  title,
  quote,
  points,
  imagePosition,
  backgroundColor,
}: IssueCardProps) => {
  const content = (
    <div className={imagePosition === 'left' ? '' : ''}>
      <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-6">
        <Sparkles size={16} className="text-secondary" />
        <span className="text-sm font-semibold text-secondary">Issue Priority</span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
        {title}
      </h2>
      
      {/* Quote */}
      <blockquote className="border-l-4 border-secondary pl-6 py-4 mb-10 bg-white/50 rounded-r-lg">
        <p className="text-xl md:text-2xl font-semibold text-neutral-800 italic leading-relaxed">
          "{quote}"
        </p>
      </blockquote>

      {/* Points List */}
      <ul className="space-y-5">
        {points.map((point, index) => (
          <li key={index} className="flex gap-4 items-start group">
            <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CheckCircle size={16} className="text-white" />
            </div>
            <span className="text-lg text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imagePlaceholder = (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden group">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 group-hover:from-primary/25 group-hover:via-secondary/20 group-hover:to-accent/15 transition-all duration-500"></div>
      
      {/* Icon container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-primary/60 group-hover:text-primary/80 group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );

  return (
    <section className={`py-16 md:py-24 ${backgroundColor} relative overflow-hidden`}>
      {/* Subtle background decoration */}
      {backgroundColor === 'bg-white' && (
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center ${
            imagePosition === 'right' ? 'md:[direction:rtl]' : ''
          }`}>
            {imagePosition === 'left' ? (
              <>
                <div className="flex justify-center md:justify-start">{imagePlaceholder}</div>
                <div>{content}</div>
              </>
            ) : (
              <>
                <div>{content}</div>
                <div className="flex justify-center md:justify-end">{imagePlaceholder}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueCard;
