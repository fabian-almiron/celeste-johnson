import { ReactNode } from 'react';

interface IssueCardProps {
  icon: ReactNode;
  title: string;
  quote: string;
  points: string[];
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

const IssueCard = ({ 
  icon, 
  title, 
  quote, 
  points, 
  imagePosition = 'left',
  backgroundColor = 'bg-white'
}: IssueCardProps) => {
  const isLeft = imagePosition === 'left';

  return (
    <div className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          
          {/* Icon/Image Section */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="bg-primary text-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
              {icon}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {title}
            </h2>
            
            <div className="bg-neutral-100 border-l-4 border-primary p-4 mb-6 rounded-r-lg">
              <p className="text-xl italic text-neutral-700">
                "{quote}"
              </p>
            </div>

            <ul className="space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-neutral-700 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
