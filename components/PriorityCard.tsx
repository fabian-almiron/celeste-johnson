import { ReactNode } from 'react';

interface PriorityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PriorityCard = ({ icon, title, description }: PriorityCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-neutral-100">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 mx-auto">
        <div className="text-primary">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-neutral-700 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PriorityCard;
