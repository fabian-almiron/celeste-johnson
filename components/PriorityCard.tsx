import Link from 'next/link';
import { ReactNode } from 'react';

interface PriorityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PriorityCard = ({ icon, title, description }: PriorityCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-neutral-200">
      <div className="text-primary mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-neutral-600 mb-6 text-center leading-relaxed">
        {description}
      </p>
      <div className="text-center">
        <Link
          href="/issues"
          className="text-primary hover:text-primary-dark font-semibold inline-flex items-center transition-colors duration-200"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PriorityCard;
