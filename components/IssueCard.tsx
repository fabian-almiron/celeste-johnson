import { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

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
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      
      {/* Quote */}
      <blockquote className="border-l-4 border-secondary pl-6 my-6">
        <p className="text-xl font-semibold text-neutral-800 italic">
          "{quote}"
        </p>
      </blockquote>

      {/* Points List */}
      <ul className="space-y-4 mt-8">
        {points.map((point, index) => (
          <li key={index} className="flex gap-4 items-start">
            <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-lg text-neutral-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imagePlaceholder = (
    <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
      <div className="text-primary/50">
        {icon}
      </div>
    </div>
  );

  return (
    <section className={`py-16 md:py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
            imagePosition === 'right' ? 'md:flex-row-reverse' : ''
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
