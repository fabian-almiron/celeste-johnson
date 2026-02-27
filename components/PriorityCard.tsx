import { ReactNode } from 'react';

interface PriorityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PriorityCard = ({ icon, title, description }: PriorityCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-10 border border-neutral-100 hover:border-secondary/50 overflow-hidden hover:translate-y-[-8px]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Icon Container - Modern Style */}
        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-2xl mb-8 mx-auto group-hover:shadow-lg transition-all duration-300">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 text-center">
          {title}
        </h3>
        <p className="text-neutral-700 text-center leading-relaxed md:leading-loose text-base md:text-lg">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="mt-6 h-1 w-12 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default PriorityCard;
